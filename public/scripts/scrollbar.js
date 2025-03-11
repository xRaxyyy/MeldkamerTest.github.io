document.addEventListener('DOMContentLoaded', () => {
    const scrollableContent = document.querySelector('.scroll-content');
    const scrollbarThumb = document.querySelector('.custom-scrollbar-body .scrollbar-thumb');
    const scrollableWrapper = document.querySelector('.scroll-container');

    // Minimum height for the scrollbar thumb
    const MIN_THUMB_HEIGHT = 30; // You can adjust this value as needed

    // Function to update the scrollbar thumb
    function updateScrollbar() {
        if (!scrollableContent || !scrollbarThumb || !scrollableWrapper) return;
    
        // Calculate heights
        const contentHeight = scrollableContent.scrollHeight;
        const wrapperHeight = scrollableWrapper.clientHeight;
    
        // Ensure heights are valid
        if (contentHeight <= 0 || wrapperHeight <= 0) return;
    
        // Hide scrollbar if there's nothing to scroll
        if (contentHeight <= wrapperHeight) {
            scrollbarThumb.style.display = 'none';
            return; // Exit the function early since there's no need to update the scrollbar
        } else {
            scrollbarThumb.style.display = 'block'; // Or whatever display value you use in your CSS
        }
    
        // Calculate thumb height
        let thumbHeight = (wrapperHeight / contentHeight) * wrapperHeight;
    
        // Enforce minimum thumb height
        thumbHeight = Math.max(thumbHeight, MIN_THUMB_HEIGHT);
    
        scrollbarThumb.style.height = `${thumbHeight}px`;
    
        // Calculate thumb position
        const scrollTop = scrollableContent.scrollTop;
        const maxScrollTop = contentHeight - wrapperHeight;
        const thumbPosition = (scrollTop / maxScrollTop) * (wrapperHeight - thumbHeight);
    
        scrollbarThumb.style.top = `${thumbPosition}px`;
    }

    // Update scrollbar on scroll
    scrollableContent.addEventListener('scroll', updateScrollbar);

    // Update scrollbar on window resize
    window.addEventListener('resize', updateScrollbar);

    // Initial update
    updateScrollbar();

    // Drag functionality for the scrollbar thumb
    let isDragging = false;

    scrollbarThumb.addEventListener('mousedown', (e) => {
        isDragging = true;
        document.body.style.userSelect = 'none'; // Prevent text selection
        document.body.style.pointerEvents = 'none'
        scrollbarThumb.style.pointerEvents = 'none'; // Prevent interaction with the scrollbar itself

        const initialY = e.clientY;
        const initialThumbPosition = parseFloat(scrollbarThumb.style.top || 0);

        function drag(e) {
            if (!isDragging) return;

            const deltaY = e.clientY - initialY;
            const newThumbPosition = initialThumbPosition + deltaY;

            const wrapperHeight = scrollableWrapper.clientHeight;
            const thumbHeight = parseFloat(scrollbarThumb.style.height || 0);
            const maxThumbPosition = wrapperHeight - thumbHeight;

            const clampedPosition = Math.min(Math.max(newThumbPosition, 0), maxThumbPosition);

            scrollbarThumb.style.top = `${clampedPosition}px`;

            const scrollTop = (clampedPosition / maxThumbPosition) * (scrollableContent.scrollHeight - scrollableContent.clientHeight);
            scrollableContent.scrollTop = scrollTop;
        }

        function stopDrag() {
            isDragging = false;
            document.body.style.userSelect = ''; // Restore text selection
            scrollbarThumb.style.pointerEvents = ''; // Restore interaction with the scrollbar
            document.body.style.pointerEvents = ''
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
        }

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    });

    // Make the updateScrollbar function globally accessible
    window.updateScrollbar = updateScrollbar;
});

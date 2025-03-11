window.onload = function () {
  // Update the scrollbar immediately when the page loads
  if (typeof window.updateScrollbar === 'function') {
      window.updateScrollbar();
  }

  // Set the duration for the loader to stay visible (e.g., 1 second)
  setTimeout(function () {
      const loader = document.querySelector('#showbox-holder');

      // Add the fade-out class to trigger the animation
      loader.classList.add('fade-out');

      // Remove the overflow: hidden style from the html element
      document.documentElement.style.overflow = '';

      // Hide the loader after the fade-out animation is complete
      setTimeout(function () {
          loader.style.display = 'none';
      }, 600); // Matches the fade-out duration
  }, 1000); // 1000ms = 1 second
};
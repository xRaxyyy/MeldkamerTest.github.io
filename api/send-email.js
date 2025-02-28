import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // Log the raw request body for debugging
        console.log('Raw Request Body:', req.body);

        // Parse the request body as JSON
        const formData = JSON.parse(req.body);

        // Log the parsed form data for debugging
        console.log('Parsed Form Data:', formData);

        // Construct the payload for formsubmit.co
        const payload = {
            ...formData,
            _captcha: false, // Disable captcha (optional)
            _subject: 'Nieuw bericht van de website', // Set email subject
        };

        // Log the constructed payload for debugging
        console.log('Constructed Payload:', payload);

        // Check if FORMSUBMIT_EMAIL is set
        if (!process.env.FORMSUBMIT_EMAIL) {
            return res.status(500).json({ error: 'Environment variable FORMSUBMIT_EMAIL is not set' });
        }

        // Send the data to formsubmit.co
        const response = await fetch(`https://formsubmit.co/${process.env.FORMSUBMIT_EMAIL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        // Log the response status for debugging
        console.log('Response Status from formsubmit.co:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('formsubmit.co returned an error:', errorText);
            return res.status(500).json({ error: 'Failed to send email', details: errorText });
        }

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
}

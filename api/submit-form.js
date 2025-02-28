import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Get the form data from the request body
            const formData = JSON.parse(req.body);

            // Add hidden fields required by formsubmit.co
            const payload = {
                ...formData,
                _captcha: false, // Disable captcha (optional)
                _subject: 'Nieuw bericht van de website', // Set email subject
            };

            // Send the data to formsubmit.co with the recipient email
            const response = await fetch(`https://formsubmit.co/${process.env.FORMSUBMIT_EMAIL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                res.status(200).json({ message: 'Email sent successfully' });
            } else {
                res.status(500).json({ error: 'Failed to send email' });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}

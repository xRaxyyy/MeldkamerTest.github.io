const fetch = require('node-fetch');

exports.handler = async (event) => {
    const { naam, email, reason, bericht } = JSON.parse(event.body);

    const response = await fetch('https://formsubmit.co/ajax/xraxyyy@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            naam,
            email,
            reason,
            bericht,
            _captcha: false,
            _subject: 'Nieuw bericht van de website',
        }),
    });

    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};

<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $naam = htmlspecialchars($_POST['naam']);
    $email = htmlspecialchars($_POST['email']);
    $reason = htmlspecialchars($_POST['reason']);
    $bericht = htmlspecialchars($_POST['bericht']);

    // Set the recipient email address (secure and not visible in the HTML)
    $recipient = "xraxyyy@gmail.com";

    // Set the email subject
    $subject = "Nieuw bericht van de website: $reason";

    // Build the email content
    $email_content = "Naam: $naam\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Reden: $reason\n";
    $email_content .= "Bericht:\n$bericht\n";

    // Set the email headers
    $headers = "From: $naam <$email>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo "<script>alert('Bedankt! Uw bericht is verzonden.'); window.location.href = 'contact.html';</script>";
    } else {
        // Email failed to send
        echo "<script>alert('Er is iets misgegaan. Probeer het later opnieuw.'); window.location.href = 'contact.html';</script>";
    }
} else {
    // If the form is not submitted, redirect back to the form
    header("Location: contact.html");
    exit;
}
?>
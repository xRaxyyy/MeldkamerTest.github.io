<?php
// Define the recipient email address (hidden from the client)
$to = "xraxyyy@gmail.com"; // Replace with your actual email address

// Retrieve form data
$subject = $_POST['_subject'];
$name = htmlspecialchars($_POST['naam']);
$email = htmlspecialchars($_POST['email']);
$reason = htmlspecialchars($_POST['reason']);
$message = htmlspecialchars($_POST['bericht']);

// Construct the email body
$body = "Nieuw bericht van de website:\n\n";
$body .= "Naam: $name\n";
$body .= "Email: $email\n";
$body .= "Reden: $reason\n";
$body .= "Bericht: $message\n";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    // If the email was sent successfully
    echo json_encode(['status' => 'success', 'message' => 'Bedankt! Uw bericht is verzonden.']);
} else {
    // If there was an error sending the email
    echo json_encode(['status' => 'error', 'message' => 'Er is iets misgegaan. Probeer het later opnieuw.']);
}
?>

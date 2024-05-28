<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Email address where you want to receive the messages
    $to = "arunclenten@gmail.com"; // Update this with your email
    
    // Email subject
    $subject = "New Contact Form Submission";
    
    // Email message
    $email_message = "Name: " . $name . "\n" .
                     "Email: " . $email . "\n" .
                     "Message: " . $message;
    
    // Send email
    if (mail($to, $subject, $email_message)) {
        // If mail() function succeeds
        echo "Thank you for your message. We'll get back to you shortly!";
    } else {
        // If mail() function fails
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // If form is not submitted
    echo "Error: Form submission method not allowed.";
}
?>

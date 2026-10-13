<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect post data
    $name = htmlspecialchars($_POST['full_name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $service = htmlspecialchars($_POST['service_interest']);
    $message = htmlspecialchars($_POST['project_scope']);
    
    // Email settings
    $to = "raphamasila@gmail.com";
    $subject = "New Inquiry: RKJ-ENQ-2025 from $name";
    
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Service: $service\n\n";
    $body .= "Project Scope:\n$message\n";
    
    $headers = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your inquiry has been sent.";
        // Alternatively, redirect back to the site:
        // header("Location: contact.html?success=true");
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>
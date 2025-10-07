<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

$config = [
    'smtp_host' => $_ENV['SMTP_HOST'],
    'smtp_user' => $_ENV['SMTP_USER'],
    'smtp_pass' => $_ENV['SMTP_PASS'],
    'smtp_secure' => $_ENV['SMTP_SECURE'],
    'from_email' => $_ENV['FROM_EMAIL'],
    'from_name' => $_ENV['FROM_NAME']
];

// Capture form data
$name = htmlspecialchars($_POST['name'] ?? 'Name not provided');
$email = htmlspecialchars($_POST['email'] ?? 'Email not provided');
$message = htmlspecialchars($_POST['message'] ?? 'Message not provided');

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = $config['smtp_secure'];
    $mail->Port       = 587;
    
    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress('niaxusx@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'New Message from Rosure Portfolio';
    $mail->Body    = "
        <h2>New Message</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Message:</strong></p>
        <p>{$message}</p>
    ";

    $mail->send();
    echo "Message sent succesfully.";
} catch (Exception $e) {
    http_response_code(500);
    echo "Error sending message: {$mail->ErrorInfo}";
}
?>

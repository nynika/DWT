<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if(isset($_POST['send'])){
    $companyname = htmlentities($_POST['companyname']);
    $name = htmlentities($_POST['name']);
    $address = htmlentities($_POST['address']);
    $email = htmlentities($_POST['email']);
    $mobile = htmlentities($_POST['mobile']);
    $subject = htmlentities($_POST['subject']);
    $message = htmlentities($_POST['message']);


    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'sujibalki678@gmail.com';
    $mail->Password = 'wplybfqggtcbzjex';
   
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress('sujibalki678@gmail.com');
    $mail->Subject = ("$email ($subject)");
    $mail->Body = nl2br("Email:$email,\n Name:$name,\n Message:$message, \n Address:$address, \n Company Name:$companyname,\n Mobile number:$mobile");
    $mail->send(); 
    header("Location: ./response.html");
}
?>

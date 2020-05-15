<?php
if (isset($_POST['submit'])) {

    // ob_start is a buffer to send headers all at once
    ob_start();

    $fullName = trim($_POST['fullName']);
    $phoneNumber = trim($_POST['phoneNumber']);
    $eMail = trim($_POST['eMail']);
    $textArea = trim($_POST['textArea']);
    $submit = $_POST['submit'];

    $fullName = filter_var($fullName, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $phoneNumber = filter_var($phoneNumber, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $eMail = filter_var($eMail, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $textArea = filter_var($textArea, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $submit = $_POST['submit'];

    if (empty($fullName) || empty($phoneNumber) || empty($eMail)) {
        exit();
    } else {
        if (!preg_match("/^[a-zA-Z ]*$/", $fullName) || !preg_match("/^[0-9 \.(\)-]*$/", $phoneNumber) || !preg_match("/.*/", $textArea)) {
            exit();
        } else {
            if (!filter_var($eMail, FILTER_VALIDATE_EMAIL)) {
                exit();
            }
        }
    }

    // Set mailto, headers and text to be in sent message
    //getyourestimate@underpressureexteriorcleaning.com
    $to = "getyourestimate@underpressureexteriorcleaning.com";
    $mailFrom = "getyourestimate@underpressureexteriorcleaning.com";
    $subject = "New Quote Request!";

    $message = '<!DOCTYPE html><html lang="en">';
    $message .= '<table cellpadding="10" style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:500px;border:1px solid #bbbbbb;"><tbody>';
    $message .= '<tr><td colspan="2" style="font-size:24px;font-weight:bold;text-align:center;background-color:#555555;color:#ffffff;">New Quote Request!</td></tr>';
    $message .= "<tr><td style='font-weight:bold;font-size:18px;'>From:</td><td style='font-size:18px;'>" . filter_var($fullName, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "</td></tr>";
    $message .= "<tr><td style='font-weight:bold;font-size:18px;'>Phone:</td><td style='font-size:18px;'>" . filter_var($phoneNumber, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "</td></tr>";
    $message .= "<tr><td style='font-weight:bold;font-size:18px;'>Email:</td><td style='font-size:18px;'>" . filter_var($eMail, FILTER_SANITIZE_EMAIL) . "</td></tr>";
    $message .= '<tr><td style="font-weight:bold;font-size:18px;" colspan="2">Message:</td></tr>';
    $message .= "<tr><td style='font-size:18px;' colspan='2'>" . filter_var($textArea, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "</td></tr></table></tbody>";
    $message .= '</body></html>';

    $headers = "From: Quote Form\r\n";
    $headers .= "Reply-To: ". filter_var($eMail, FILTER_SANITIZE_EMAIL) . "\r\n";
    // $headers .= "CC: getyourestimate@underpressureexteriorcleaning.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    // Use mail() to send with passed-in values defined above
    mail($to, $subject, $message, $headers);

    header("location: ../");
    //ob_end_flush clears the headers after sending
    ob_end_flush();
} else {
    exit();
}?>
<?php
if (isset($_POST['submit'])) {
    // ob_start is a buffer to send headers all at once
    ob_start();
    // connect to database
    //include("dbconnect.php");

    // get form fields by names
    //$fullName = mysqli_real_escape_string($db_connect, $_POST['fullName']);
    //$phoneNumber = mysqli_real_escape_string($db_connect, $_POST['phoneNumber']);
    //$eMail = mysqli_real_escape_string($db_connect, $_POST['eMail']);
    //$textArea = mysqli_real_escape_string($db_connect, $_POST['textArea']);

    if (empty($fullName) || empty($phoneNumber) || empty($eMail)) {
        exit();
    } else {
        if (!preg_match("/^[a-zA-Z ]*$/", $fullName) || !preg_match("/^[0-9 \.(\)-]*$/", $phoneNumber) || !preg_match("/.*/", $textArea)) {
            exit();
        } else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                exit();
            }
        }
    }

    // Insert data into table
    //$query = mysqli_query($db_connect, "INSERT INTO contacts(firstname, lastname, email, website) VALUES('$firstname','$lastname','$email','$website')") or die(mysqli_error($db_connect));

    // close database connection
    //mysqli_close($db_connect);

    // Set mailto, headers and text to be in sent message
    $to = "deftoriginals@gmail.com";
    $mailFrom = "carib@deftoriginals.com";
    $subject = "Under Pressure Form Submission";
    $message = wordwrap("Hello, my name is ".$fullName.", and I would like you to contact me at ".$email." or ".$phoneNumber." about an estimate.\n\nComments: ".$textArea, 70, "\r\n");
    $headers = "From: ".$mailFrom;

    // Use mail() to send with passed-in values defined above
    mail($to, $subject, $message, $headers);

    header("location: https://www.deftoriginals.com, true, 301");
    //ob_end_flush clears the headers after sending
    ob_end_flush();
} else {
    exit();
}?>
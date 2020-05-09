<?php
if (isset($_POST['submit'])) {
    // ob_start is a buffer to send headers all at once
    ob_start();
    // connect to database
    include("dbconnect.php");

    // get form fields by names
    $firstname = mysqli_real_escape_string($db_connect, $_POST['firstName']);
    $lastname = mysqli_real_escape_string($db_connect, $_POST['lastName']);
    $email = mysqli_real_escape_string($db_connect, $_POST['email']);
    $website = mysqli_real_escape_string($db_connect, $_POST['website']);

    if (empty($firstname) || empty($lastname) || empty($email) || empty($website)) {
        exit();
    } else {
        if (!preg_match("/^[a-zA-Z]*$/", $firstname) || !preg_match("/^[a-zA-Z]*$/", $lastname) || !preg_match("/^[a-zA-Z0-9:\/\.\-~_=\?%]+$/", $website)) {
            exit();
        } else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                exit();
            }
        }
    }

    // Insert data into table
    $query = mysqli_query($db_connect, "INSERT INTO contacts(firstname, lastname, email, website) VALUES('$firstname','$lastname','$email','$website')") or die(mysqli_error($db_connect));

    // close database connection
    mysqli_close($db_connect);

    // Set mailto, headers and text to be in sent message
    $to = "deftoriginals@gmail.com";
    $mailFrom = "carib@deftoriginals.com";
    $subject = "New contact form submission!";
    $message = wordwrap("Please contact ".$firstname." ".$lastname." at ".$email." about their website ".$website, 70, "\r\n");
    $headers = "From: ".$mailFrom;

    // Use mail() to send with passed-in values defined above
    mail($to, $subject, $message, $headers);

    header("location: ../form/thank-you.php?send=success, true, 301");
    //ob_end_flush clears the headers after sending
    ob_end_flush();
} else {
    exit();
}?>














<!-- NEED TO CHANGE ALL VARIABLES FOR NEW FORM!!!!!! -->
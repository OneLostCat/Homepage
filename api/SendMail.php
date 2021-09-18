<?php
//parse_str($_SERVER['QUERY_STRING']);

if(!isset($_POST['from']) || !isset($_POST['to']) || !isset($_POST['subject']) || !isset($_POST['message']) || !isset($_POST['from'])){
    header("Status: 400 Bad Request");
    exit("Missing Parameter");
}
//echo $_POST['username'];
//$from = "someonelse<someonelse@example.com>";
//$to = "message@ymas.top";
//$subject = "Test mail";
//$message = "Hello! This is a simple email message.";
$headers = "From: " . $_POST['from'];

//mail($_POST['to'],$_POST['subject'],$_POST['message'],$headers);
//echo "Mail Sent.";

?>
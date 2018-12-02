<?php
$to = "radoslaw.moczarski@brainattach.com";
$subject = $_POST['email'];
$txt = $_POST['message'];

mail($to,$subject,$txt);
echo 'wysłano za pomocą ajax'
?>
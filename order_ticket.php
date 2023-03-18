<?php
$data = json_decode(file_get_contents("php://input"), true);
$ordered_tickets = $data["tickets"];

$entry_of_ordered_tickets = '';

foreach($ordered_tickets as $ordered_ticket) {
    $entry_of_ordered_tickets .= $ordered_ticket . "; ";
};

$conn = mysqli_connect('localhost', 'root', '', 'train_tickets');
if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
};

$now = date("Y-m-d H:i:s");
$insert_ticket = "INSERT INTO ticket_order(`ticket`, `date`) VALUES('$entry_of_ordered_tickets', '$now')";

mysqli_query($conn, $insert_ticket);
mysqli_close($conn);
?>
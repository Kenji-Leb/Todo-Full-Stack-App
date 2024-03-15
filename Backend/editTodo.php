<?php
include('connection.php');

$user_id = $_POST['user_id'];
$todo_id = $_POST['todo_id'];
$task = $_POST['task'];
$completed = $_POST['completed'];
$created_date = $_POST['created_date'];
$description = $_POST['description'];

$query = $mysqli->prepare('UPDATE todos SET task=?, completed=?, created_date=?, description=? WHERE user_id=? AND todo_id=?');
$query->bind_param('sissii', $task, $completed, $created_date, $description, $user_id, $todo_id);
$query->execute();

if ($query->affected_rows > 0) {
    $response['status'] = "success";
    $response['message'] = "todo $todo_id was updated successfully";
} else {
    $response["status"] = "error";
    $response["message"] = "todo $todo_id was not updated";
}
echo json_encode($response);
?>

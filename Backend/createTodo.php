<?php
include('connection.php');

$user_id = $_POST['user_id'];
$task = $_POST['task'];
$completed = $_POST['completed'];
$created_date = $_POST['created_date'];
$description = $_POST['description'];

$check_task = $mysqli->prepare('SELECT task FROM todos WHERE task=?');
$check_task->bind_param('s', $task);
$check_task->execute();
$check_task->store_result();
$task_exists = $check_task->num_rows();

if ($task_exists == 0) {
    $query = $mysqli->prepare('INSERT INTO todos (user_id, task, completed, created_date, description) VALUES (?, ?, ?, ?, ?)');
    $query->bind_param('isiss', $user_id, $task, $completed, $created_date, $description);
    $query->execute();
    $todo_id = $query->insert_id;
    $response['status'] = "success";
    $response['message'] = "Todo $todo_id was created successfully";
} else {
    $response["status"] = "error";
    $response["message"] = "Todo already exists";
}
echo json_encode($response);
?>

<?php
include('connection.php');

$user_id = $_POST['user_id'];
$todo_id = $_POST['todo_id'];

$query = $mysqli->prepare('DELETE FROM todos WHERE user_id=? AND todo_id=?');
$query->bind_param('ii', $user_id, $todo_id);
$query->execute();

if ($query->affected_rows > 0) {
    $response['status'] = "success";
    $response['message'] = "todo $todo_id was deleted successfully";
} else {
    $response["status"] = "error";
    $response["message"] = "todo $todo_id was not deleted";
}
echo json_encode($response);
?>

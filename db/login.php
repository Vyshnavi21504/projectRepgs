<?php
echo "hello world";
/*$email = $_POST['email'];
$password = $_POST['password'];

$con = new mysqli("localhost","root","","sql_signup");
if($con->connect_error){
    die("failed to connect: ".$con->connect_error);
}
else{
    $stmt = $con->prepare("select * from users where email = ?");
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows > 0){
        $data = $stmt_result->fetch_assoc();
        if($data['password']==$password){
            echo "login successfully";
        }

    }
    else{
        echo "invalid email or password";
    }
}*/



?>
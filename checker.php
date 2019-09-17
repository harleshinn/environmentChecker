<?php

$envName = isset($_POST['env_name']) ? $_POST['env_name'] : '';
$envStatus = isset($_POST['env_status']) ? $_POST['env_status'] : '';


print_r($_POST);

function setEnviromentStatus(){
  $serverName = 'localhost';
  $user = 'mrm_env_checker';
  $pass = 'mrm1234';
  $database = 'mrm_env_checker';
  
  $conn = new mysqli($serverName, $user, $pass, $database);
  
    if($conn->connect_error) {
      die ('connection failed: ' . $conn->connect_error);
    }
    
    $sql = "SELECT * FROM environment_status";
    $result = $conn->query($sql);
  
  
   if ($result->num_rows > 0) {
      $data = array();
      while($row = $result->fetch_assoc()) {
        $data[] = $row;
      }
      return $data;
    } else {
      return "no results";
    } 
    $conn->close();
}


function getEnvironments() {
  $serverName = 'localhost';
  $user = 'mrm_env_checker';
  $pass = 'mrm1234';
  $database = 'mrm_env_checker';
  
  $conn = new mysqli($serverName, $user, $pass, $database);
  
    if($conn->connect_error) {
      die ('connection failed: ' . $conn->connect_error);
    }
    
    $sql = "SELECT * FROM environment_status";
    $result = $conn->query($sql);
  
  
   if ($result->num_rows > 0) {
      $data = array();
      while($row = $result->fetch_assoc()) {
        $data[] = $row;
      }
      return $data;
    } else {
      return "no results";
    } 
    $conn->close();
  }
?>
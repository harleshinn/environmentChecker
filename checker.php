<?php


$data = json_decode(file_get_contents('php://input'), true);
$env = $data["env"];
$envStatus = $data["envStatus"].'32';
$envId = $data["envId"];


function setEnviromentStatus($env, $envStatus, $envId){
  $serverName = 'localhost';
  $user = 'mrm_env_checker';
  $pass = 'mrm1234';
  $database = 'mrm_env_checker';
  
  $conn = new mysqli($serverName, $user, $pass, $database);
  
    if($conn->connect_error) {
      die ('connection failed: ' . $conn->connect_error);
    }
    
    $sql = "UPDATE environment_status SET env_name=".$env.",env_status=".$envStatus." WHERE env_id=".$envId."";
    echo $sql;
    $result = $conn->query($sql);
    $conn->close();
}

setEnviromentStatus($env, $envStatus, $envId);

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
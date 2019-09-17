<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Enviroment Checker</title>
  <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/main.css">
  <?php include_once('checker.php'); ?>
</head>
<body>
  <section class="main-wrapper">
    <h1 class="title">Enviroment Checker</h1>
    <div class="enviroments">
      <header>
        <div>Enviroment</div>
        <div>Status</div>
        <div>Last Build</div>
        <div>Branch</div>
        <div>Developer</div>
      </header>
      <form action="#" method="post" id="enviroments">
        <?php
          $getEnvs = getEnvironments();
          foreach($getEnvs as $k => $env) {
            ?>
            <div class="row">
              <div><span class="env__name" data-form="env_name"><?php echo strtoupper($env['env_name']); ?></span></div>
              <div><input type="checkbox" name="status" id="<?php echo $env['env_name'];?>"> <label data-form="env_status" data-status="<?php echo $env['env_status'];?>" for="<?php echo $env['env_name'];?>" class="env__status on"><?php echo ($env['env_status'] == 1) ? 'Available' : 'Unavailable';?></label></div>
              <div><span class="env__build">Mon, 02/09/2019, 10:23:30</span></div>
              <div><span class="env__branch">feature/NGJ-111</span></div>
              <div><span class="env__developer">mperez2s</span></div>
            </div>
          <?php
          }
        ?>
      </form>
    </div> <!-- .environments end -->
  </section>

  <script src="js/app.js"></script>
</body>
</html>
'use strict';

let $checkbox = document.querySelectorAll('input[type="checkbox"]');
let $formElements = document.querySelectorAll('[data-form="env_name"]');


$checkbox.forEach(function(_val, _key) {
  
  let $envStatus = $checkbox[_key].nextElementSibling.getAttribute('data-status');

  if ($envStatus == 0 ){
    $checkbox[_key].nextElementSibling.innerHTML = 'Unavailable';
    $checkbox[_key].nextElementSibling.classList.add('off');
    $checkbox[_key].nextElementSibling.classList.remove('on');
    console.log($checkbox[_key].checked);
  } else if ($envStatus == 1) {
    $checkbox[_key].checked = true;
  } 

  $checkbox[_key].addEventListener('click', function(_e){
    
    let $env = this.id;
    let $envId = this.getAttribute('data-id');
    let $envStatus = this.nextElementSibling.getAttribute('data-status');
    if ( this.checked == true ) {
      console.log('checked true ' + this.checked)
      this.nextElementSibling.innerHTML = 'Available';
      this.nextElementSibling.classList.remove('off');
      this.nextElementSibling.classList.add('on');
      this.nextElementSibling.setAttribute('data-status', '1');
      $envStatus = this.nextElementSibling.getAttribute('data-status');    
    }
    else {
      console.log('checked false ' + this.checked)
      this.nextElementSibling.innerHTML = 'Unavailable';
      this.nextElementSibling.classList.remove('on');
      this.nextElementSibling.classList.add('off');
      this.nextElementSibling.setAttribute('data-status', '0');
      $envStatus = this.nextElementSibling.getAttribute('data-status');
    }
    
    setEnviromentStatus($env, $envStatus, $envId);
  });
});


function setEnviromentStatus($env, $envStatus, $envId){
  
  let httpRequest = new XMLHttpRequest();
  
  let $formData2 = [];
  $formData2.push($env, $envStatus);

  httpRequest.onreadystatechange = function() {
    
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
       // console.log('el request seria: ' + httpRequest.responseText);
      } else {
        console.log('Nope');
      }
    } 
  }
  
  let $serverData = {'env': $env, 'envStatus': $envStatus, 'envId' : $envId};

  httpRequest.open('POST', 'checker.php', true);
  
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  httpRequest.send(JSON.stringify($serverData));
 
} 
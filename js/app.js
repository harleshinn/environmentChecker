'use strict';

let $checkbox = document.querySelectorAll('input[type="checkbox"]');
let $formElements = document.querySelectorAll('[data-form="env_name"]');


$checkbox.forEach(function(_val, _key) {
  
  $checkbox[_key].addEventListener('click', function(_e){
    let $env = this.id;
    let $envId = this.getAttribute('data-id');
    let $envStatus = this.nextElementSibling.getAttribute('data-status');
    
    
    if ( this.checked == false ) {
      this.nextElementSibling.innerHTML = 'Available';
      this.nextElementSibling.classList.remove('off');
      this.nextElementSibling.classList.add('on');
    }
    else {
      
      this.nextElementSibling.innerHTML = 'Unavailable';
      this.nextElementSibling.classList.remove('on');
      this.nextElementSibling.classList.add('off');
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
        console.log('el request seria: ' + httpRequest.responseText);
      } else {
        console.log('no nos fuimos nada');
      }
    } 
  }
  var $lalala = {'env': $env, 'envStatus': $envStatus, 'envId' : $envId};

  httpRequest.open('POST', 'checker.php', true);
  
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  httpRequest.send(JSON.stringify($lalala));
  console.log($lalala)
  
} 
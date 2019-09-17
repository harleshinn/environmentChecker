'use strict';

let $checkbox = document.querySelectorAll('input[type="checkbox"]');
let $formElements = document.querySelectorAll('[data-form="env_name"]');


$checkbox.forEach(function(_val, _key) {
  
  $checkbox[_key].addEventListener('click', function(_e){
    let $env = this.id;
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
    
    // tiene que levantar cada checkbox y su sibling span y mandar los valores
    // a setEnviromentsStatus($env, $envStatus) para que actualice el que corresponde
    // sino siempre envía el mismo
    setEnviromentStatus($env, $envStatus);
    
  });
});


function setEnviromentStatus2() {
  let $form = document.querySelector('#enviroments');
  let $env = document.querySelector('.env__name').innerHTML;
  let $envStatus = document.querySelector('[data-status]').getAttribute('data-status');
  let $formData2 = [];
  $formData2.push($env, $envStatus);
  
  
  const $formData = new FormData($form);
  
  fetch('checker.php', {
    method : 'post',
    body : $formData2
  }).then(function(response){
    console.log(response);
    return response.text();
  }).then(function(text) {
    //console.log(text);
  }).catch(function(error){
    console.error(error);
  });
}

function setEnviromentStatus($env, $envStatus){
  
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
  
  httpRequest.open('POST', 'checker.php', true);
  
  //httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  console.log(JSON.stringify($formData2));
  httpRequest.send(JSON.stringify($formData2));
  
} 
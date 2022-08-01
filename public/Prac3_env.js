// connect to the socket
let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})
function createProjectCard(project){
  return `
 
<div class="col s12 m7" id="project-id-${project.id}"style= "width:420px">
<div class="card horizontal">
<div class="card-image">
<img src="${project.img ? project.img:'C:/Users/KAVIUL/Desktop/sit725-2022-t2-prac3/public/images/logo.jpg'}"style= "height:150px">
</div>
<div class="card-stacked">
<div class="card-content">
<p>${project.info}</p>
</div>
<div class="card-action">
<a href="project.html?pid=${project.id}">Click to open Project</a>
</div>
</div>
</div>
</div>

`;
}

$(document).ready(function(){
  console.log('Ready')
  
 
  //test get call
  $.get('/projects',(result) => {
    for (let project of result){
      $('#projects').append(createProjectCard(project));
    }
  })
  $('.sidenav').sidenav();
})  

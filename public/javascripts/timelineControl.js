// Get elements to add event listeners and edit classes
var guthmann = document.getElementById('guthmann');
var guthmannDescription = document.getElementById('guthmannDescription');

var cfa = document.getElementById('cfa');
var cfaDescription = document.getElementById('cfaDescription');

var cu = document.getElementById('cu');
var cuDescription = document.getElementById('cuDescription');

var sim = document.getElementById('sim');
var simDescription = document.getElementById('simDescription');

var dominos = document.getElementById('dominos');
var dominosDescription = document.getElementById('dominosDescription');

var arz = document.getElementById('arz');
var arzDescription = document.getElementById('arzDescription');

// Add event listeners to elements and call functions to edit classes
guthmann.onclick = function() {
   activate('guthmann');
   deactivate('guthmann');
}

cfa.onclick = function() {
   activate('cfa');
   deactivate('cfa');
}

cu.onclick = function() {
   activate('cu');
   deactivate('cu');
}

sim.onclick = function() {
   activate('sim');
   deactivate('sim');
}

dominos.onclick = function() {
   activate('dominos');
   deactivate('dominos');
}

arz.onclick = function() {
   activate('arz');
   deactivate('arz');
}

// Adds class "active" to the element associated with the passed parameter
function activate(id){
   if(id = 'guthmann'){
      guthmann.classList.add('active');
      guthmannDescription.classList.add('active');
   }
   if(id = 'cfa'){
      cfa.classList.add('active');
      cfaDescription.classList.add('active');
   }
   if(id = 'cu'){
      cu.classList.add('active');
      cuDescription.classList.add('active');
   }
   if(id = 'sim'){
      sim.classList.add('active');
      simDescription.classList.add('active');
   }
   if(id = 'dominos'){
      dominos.classList.add('active');
      dominosDescription.classList.add('active');
   }
   if(id = 'arz'){
      arz.classList.add('active');
      arzDescription.classList.add('active');
   }
}

// Removes class "active" from the elements that are not associated with the passed parameter
function deactivate(id){
   if(id != 'guthmann'){
      guthmann.classList.remove('active');
      guthmannDescription.classList.remove('active');
   }
   if(id != 'cfa'){
      cfa.classList.remove('active');
      cfaDescription.classList.remove('active');
   }
   if(id != 'cu'){
      cu.classList.remove('active');
      cuDescription.classList.remove('active');
   }
   if(id != 'sim'){
      sim.classList.remove('active');
      simDescription.classList.remove('active');
   }
   if(id != 'dominos'){
      dominos.classList.remove('active');
      dominosDescription.classList.remove('active');
   }
   if(id != 'arz'){
      arz.classList.remove('active');
      arzDescription.classList.remove('active');
   }
}

var protostar = "photo/protostar.png";
var theSwitch = 0;

function changeImage(starImg) {
  document.getElementById('protostar').src = starImg;
}

function submitInfo() {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var object = document.getElementById("objectInput").value;
  document.getElementById('outputName').innerHTML = ("Your Name: " + name);
  document.getElementById('outputEmail').innerHTML = ("Your Email: " + email);
  document.getElementById('outputObject').innerHTML = ("Your Objects Name: " + object);
  /*(name.value && email.value && phone.value) ? alert("Thank You") : alert("Please fill in all fields");*/
}

//*Function to create a floating Earth that floats across the screen.
function floatingEarth(){
  var el = document.getElementById("floatyEarth");
  var position = 0;
  setInterval(frame, 5);
  function frame(){
    if(position == 1800){
      position = 0;
    }else{
      position++;
      el.style.left = position + "px";
    }
  }
}
document.getElementById("submit").addEventListener("click", submitInfo, false);

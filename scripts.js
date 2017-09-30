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

function move(){
  var elem = document.getElementById('animation');
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame(){
    if(pos==1900){
      /*clearInterval();*/
      pos = 0;
    }
    else{
      pos++;
      /*elem.style.top = pos +'px';*/
      elem.style.left = pos + 'px';
    }
  }
}

document.getElementById("submit").addEventListener("click", submitInfo, false);

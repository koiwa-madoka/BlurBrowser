window.addEventListener("deviceorientation", handleOrientation, true);
 
function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  
  console.log(alpha);
  console.log(beta);
  var elem = document.getElementById("box1");
  var elem2 = document.getElementById("box2");
  
  if(beta<80){
       elem.style.filter = 'blur('+100/beta +'px)'
     }else if(beta<95){
       elem.style.filter = 'blur(0px)';
     }else if(beta<180){
       var x = beta-95;
       elem.style.filter = 'blur('+ x +'px)';
     }
  
  elem2.style.transform ='rotate('+ beta +'deg)';
  elem2.style.transform ='translateX('+ beta +'px)';
};

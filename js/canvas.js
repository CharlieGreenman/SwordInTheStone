document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
  //  var c = document.getElementById('canvas');
   // var ctx = c.getContext('2d');

    document.addEventListener('click', sword1, false);
    var swrd = document.getElementById('sword');
    var txt = document.getElementById('legendaryBox');
    var val1 = document.getElementById('val1');
    var val2 = document.getElementById('val2');
    var ttl = document.getElementById('title');

   /* if(rand === rand2){
      swrd.style.marginTop = '0px';
      txt.style.display = 'block';
      swrd.setAttribute('class', 'float');
    }*/

   function sword1(){
     var rand = Math.floor(Math.random() * 10);
     var rand2 = Math.floor(Math.random() * 10);
     val1.innerHTML = '<p>' + rand + '</p>';
     val2.innerHTML = '<p>' + rand2 + '</p>';
     if(rand === rand2) {
       ttl.style.display = 'none';
       txt.style.zIndex = '60';
       swrd.style.marginTop = '0px';
       txt.style.display = 'block';

       swrd.setAttribute('class', 'float');
     }
    }




}

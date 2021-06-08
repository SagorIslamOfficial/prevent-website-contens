//Punish the thief:

(function () { 
    const rgx = new RegExp(/(domainName)|(:portNumUsedInLocalDev)|/g); 
    const host = window.location.host; 
    const isMatch = !host.match(rgx); 
 
    function showWarning() { 
        let warning = document.createElement('h1'); 
        warning.innerText = 'DON\'T STEAL'; 
        warning.style.fontSize = '5em'; 
        warning.style.fontWeight = 700; 
        warning.style.position = 'fixed'; 
        warning.style.left = `${(window.innerWidth/2)}px`; 
        warning.style.top =`${ window.innerHeight /2}px`; 
        warning.style.zIndex = 9999; 
        document.body.appendChild(warning); 
    } 
 
    function exactRvg () { 
        cornify_add(); 
 
            window.setTimeout(()=> { 
                exactRvg(); 
            }, 500); 
 
    } 
    if (isMatch ) { 
        showWarning(); 
        $.getScript('https://www.cornify.com/js/cornify.js',function(){ 
            exactRvg(); 
        }); 
    } 
 
})(); 

//Disable right Click for the page:

<html> 
  <head> 
    <script> 
      function disableClick(){ 
        document.onclick=function(event){ 
          if (event.button == 2) { 
            alert('Right Click Message'); 
            return false; 
          } 
        } 
      } 
    </script> 
  </head> 
  <body onLoad="disableClick()"> 
  </body> 
</html> 


function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}


//https://codepen.io/desandro/pen/KRWjzm
        var sides = [
            ["front", 'welcome1'],
            ["right", 'project1'],
            ["back", 'about1'],
            ["left", 'process1'],
            ["bottom", 'contact1']
        ];
        var cube = document.querySelector('.cube');
        var radioGroup = document.querySelector('.radio-group');
        var currentClass = '';
        var checkedRadio = "";

        function changeSide() {

            checkedRadio = radioGroup.querySelector(':checked');

            var showClass = 'show-' + checkedRadio.value;
            if (currentClass) {
                cube.classList.remove(currentClass);
            }
            cube.classList.add(showClass);
            currentClass = showClass;

            changeSection();

        }
        // set initial side
        changeSide();

        radioGroup.addEventListener('change', changeSide);


        function changeSection() {
            console.log("changing!");


            for (var i = 0; i < sides.length; i++) {

                if (checkedRadio.value == sides[i][0]) {
                    //console.log("displaying:" + sides[i][1]);
                    document.getElementById(sides[i][1]).style.display = 'block';
                    document.getElementById(sides[i][1]).style.animation = 'fade-in 1s';
                    
                    if(checkedRadio.value == "project"){
                        document.getElementById("aside-container").display = 'block';
                    } else {
                        document.getElementById("aside-container").display = 'none';
                    }

                } else {
                    //console.log("hiding:" + sides[i][1]);
                    document.getElementById(sides[i][1]).style.display = 'none';
                    document.getElementById(sides[i][1]).style.animation = 'fade-out 1s';
                }
            }

        }
        
        
        function manualChange(sideName){
            
                    document.getElementById(sideName).checked = true;
                    sideName += "1";
            
            for (var i = 0; i < sides.length; i++) {

                if (sideName == sides[i][1]) {
                    
            var showClass = 'show-' + sides[i][0];
            if (currentClass) {
                cube.classList.remove(currentClass);
            }
            cube.classList.add(showClass);
            currentClass = showClass;
                    
                    document.getElementById(sides[i][1]).style.display = 'block';
                    document.getElementById(sides[i][1]).style.animation = 'fade-in 1s';
                    

                } else {
                    document.getElementById(sides[i][1]).style.display = 'none';
                    document.getElementById(sides[i][1]).style.animation = 'fade-out 1s';
                }
            }
            
            
        }
        
        
        
 

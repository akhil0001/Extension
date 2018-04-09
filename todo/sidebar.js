var newButton = document.querySelector('#addNewTask');
var buttonDiv= document.querySelector('.newBtn');
var addButton=document.querySelector('#add')
var Burst1,bomb,bomb2,timeline;
addBurstAnimationtoButton();
createACircleUnderTheButton();
playTheAnimationForTheButton(bomb);
newButton.addEventListener('click',function()
{
  buttonDiv.classList.toggle('rotate');
  if(buttonDiv.classList.contains('rotate')){
  timeline.play();
  document.getElementById('someInfo').style.visibility='visible';
  }
  else{
    timeline.playBackward();
    document.getElementById('someInfo').style.visibility='hidden';
    
  }
 
 
});

addButton.addEventListener('click',function(){
  //timeline.playBackward();
 // buttonDiv.classList.toggle('rotate');
//  document.getElementById('someInfo').style.visibility='hidden';
  addBurstAnimationtoButton();
    
})

function addBurstAnimationtoButton()
{
   Burst1 = new mojs.Burst({
    parent: addButton,
    top: "50%",
    left: "50%",
    radius: { 0: 80 },
    count: 18,
    children: {
      shape: "circle",
      fill: { red: "yellow" },
      strokeWidth: 1,
      duration: 500,
      stroke: { red: "blue" }
    }
  });
 
}
function createACircleUnderTheButton()
{
  width= document.getElementsByClassName('wrapper')[0].clientWidth;
  height=document.getElementsByClassName('wrapper')[0].clientHeight;
  
  var HeightSquare=Math.pow(height,2);
  var WidthSquare= Math.pow(width,2);
  var GoldenDiameter= (HeightSquare+WidthSquare)/2;
  
  // document.getElementById()
    bomb=new mojs.Shape({
    shape:'circle',
    parent:newButton,
    radiusX:{20:1000},
    radiusY:{20:1000},
    fill:'#ff5a00',
    delay:200,
    duration:1000,
    easing:'cubic.out'

  })
  
}
function playTheAnimationForTheButton(thingtoBePlayed)
{
   timeline = new mojs.Timeline({
    repeat: 0
  }).add(thingtoBePlayed);
 
}


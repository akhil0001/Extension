var newButton = document.querySelector('#addNewTask');
var buttonDiv= document.querySelector('.newBtn');
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
  else
 timeline.playBackward();
 
});

function addBurstAnimationtoButton()
{
   Burst1 = new mojs.Burst({
    parent: newButton,
    top: "50%",
    left: "50%",
    radius: { 0: 80 },
    count: 18,
    children: {
      shape: "circle",
      fill: { red: "yellow" },
      strokeWidth: 1,
      duration: 600,
      stroke: { red: "blue" }
    }
  });
 
}
function createACircleUnderTheButton()
{
  height= document.getElementsByClassName('wrapper')[0].clientWidth;
  // document.getElementById()
    bomb=new mojs.Shape({
    shape:'circle',
    parent:newButton,
    radiusX:{20:height},
    radiusY:{20:height},
    fill:'#ff5a00',
    delay:200,
    duration:1000,
    easing:'ease.out'

  })
  
   bomb2=new mojs.Shape({
    shape:'circle',
    parent:newButton,
    radiusX:{20:document.documentElement.scrollWidth/2},
    radiusY:{20:document.documentElement.scrollWidth/2},
    duration:1000,
    fill:'#ff5a00',
    opacity:{0:0.5}
  })
}
function playTheAnimationForTheButton(thingtoBePlayed)
{
   timeline = new mojs.Timeline({
    repeat: 0
  }).add(thingtoBePlayed);
 
}


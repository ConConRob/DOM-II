const blockRed = document.querySelector('.block--red');
const blockBlue = document.querySelector('.block--blue');
const blockGreen = document.querySelector('.block--green');
const blockPink = document.querySelector('.block--pink');
const blockGray = document.querySelector('.block--gray');
const blocks = document.querySelectorAll('.block');
// variables
let lowestOrder = 0;
const vertStart = -200;
const vertGain = -30;
const vertTime = 0.5;
const horizGain = 50;
const horizTime = 100;
const gravityTime = 5;
const gravityDist = 0.1;
// functions
function goUp({ target }) {
  
  TweenMax.to(target, vertTime, { y: vertGain + target.verticalDistance });
  target.verticalDistance += vertGain;
}

function startGoingLeft({ target }) {
  const leftInterval = setInterval(() => {
    // BOXES ONLY GO LEFT WHEN OFF THE GROUND
    console.log(target.verticalDistance);
    if(target.verticalDistance < 0) {
      TweenMax.to(target, vertTime, { x: horizGain + target.horizontalDistance });
      target.horizontalDistance += horizGain;
    }
  }, horizTime);
  // SET UP STOP WHEN LEAVING BLOCK
  target.addEventListener('mouseout', () => clearInterval(leftInterval));
}

blocks.forEach((block) => {
  // keep track of spot
  block.verticalDistance = vertStart;
  TweenMax.to(block, .05, { y: vertStart });
  block.horizontalDistance = 0;
  // make it fly
  block.addEventListener('click', goUp);
  // make it go left
  block.addEventListener('mouseover', startGoingLeft);

  // ADD SOME GRAVITY
  setInterval(() => {
    TweenMax.to(block, vertTime, { y: gravityDist + block.verticalDistance });
    block.verticalDistance += gravityDist;
    if (block.verticalDistance > 0) {
      block.verticalDistance = 0;
    }
  }, gravityTime);
});
// TweenMax.from('.nav', 2, { x: 700 });
// TweenMax.from('.logo-heading', 2, { x: -700 });
// TweenMax.from('.main-navigation', 2, { y: -200 });
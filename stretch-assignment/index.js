const blockRed = document.querySelector('.block--red');
const blockBlue = document.querySelector('.block--blue');
const blockGreen = document.querySelector('.block--green');
const blockPink = document.querySelector('.block--pink');
const blockGray = document.querySelector('.block--gray');
const blocks = document.querySelectorAll('.block');
// variables
let lowestOrder = 0;
const vertGain = -30;
const vertTime = 0.5;
const gravityTime = 5;
const gravityDist = 0.1;
// functions
function goUp(event) {
  const { target } = event;
  TweenMax.to(target, vertTime, { y: vertGain + target.verticalDistance });
  target.verticalDistance += vertGain;
}

blocks.forEach((block) => {
  block.verticalDistance = 0;
  block.horizontalDistance = 0;
  //
  block.addEventListener('click', goUp);
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
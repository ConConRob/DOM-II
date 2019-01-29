const blockRed = document.querySelector('.block--red');
const blockBlue = document.querySelector('.block--blue');
const blockGreen = document.querySelector('.block--green');
const blockPink = document.querySelector('.block--pink');
const blockGray = document.querySelector('.block--gray');
const blocks = document.querySelectorAll('.block');
let lowestOrder = 0;
const vertGain = -30;
function goUp(event) {
  const { target } = event;

  TweenMax.to(target, 1, { y: vertGain + target.verticalDistance });
  target.verticalDistance += vertGain;
  console.log('going up');
}
blocks.forEach((block) => {
  block.verticalDistance = 0;
  block.horizontalDistance = 0;
  console.log(block);
  block.addEventListener('click', goUp);
});
// TweenMax.from('.nav', 2, { x: 700 });
// TweenMax.from('.logo-heading', 2, { x: -700 });
// TweenMax.from('.main-navigation', 2, { y: -200 });
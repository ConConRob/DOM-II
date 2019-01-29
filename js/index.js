let dragged;

// Your code goes here
function qs(tag) {
  return document.querySelector(tag);
}
function qsa(tag) {
  return document.querySelectorAll(tag);
}
// selectors
const imagesAll = qsa('img');
const header = qs('.main-navigation');
const buttonSignUp = qsa('.content-pick .btn');
const formSignUp = qs('.content-pick form');
const links = qsa('a');
const contentPickSection = qs('.content-pick');
// ===============EVENTS========================
function toggleGreyImage(event) {
  event.target.classList.toggle('hover-img');
}
// hide or show nav bar depending on scroll direction
function hideOrShowNavBar(event) {
  if (event.deltaY > 0) {
    header.classList.add('hide-header');
  } else {
    header.classList.remove('hide-header');
  }
}
// show form
function toggleForm(event) {
  formSignUp.classList.toggle('hidden');
  event.stopPropagation();
}
// ====DRAG AND DROP FUNCTIONS=======
function dragStart(event) {
  dragged = event.target;
  event.target.classList.add('hover-img');
}
function dragOver(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
  const same = event.target === dragged;
  if (event.target.parentNode.className === "dropArea" && !same) {
    const draggedFrom = dragged.parentNode;// keep track of where I dragged from
    dragged.parentNode.removeChild(dragged);
    event.target.parentNode.appendChild(dragged);
    draggedFrom.appendChild(event.target);
  }
}
// selecting text change color and make big
function changeLink(event) {
  event.target.classList.toggle('selectedLink'); 
}
// checks if user typed in random and randomizes photos
function initKeyChecker(stringToCheck) {
  const input = [];
  return function (event) {
    input.push(event.key);
    if (input.length > stringToCheck.length) {
      input.splice(0,1);
    }
    if ((input.length === stringToCheck.length) && (input.join('')===stringToCheck)){
      console.log(true);
      return true;
    }
    return false;
    }
}
const keyChecker = initKeyChecker('password');
function checkSecretAndUnicornThePage(event) {
  if (keyChecker(event)) {
    cornify_add();
  }
}

// ==================EVENT LISTENER================

imagesAll.forEach((image) => {
  image.addEventListener('mouseover', toggleGreyImage);
  image.addEventListener('mouseout', toggleGreyImage);
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('drop', drop);
});
document.addEventListener('wheel', hideOrShowNavBar);
buttonSignUp.forEach((button) => {
  button.addEventListener('dblclick', toggleForm);
});

links.forEach((link) => {
  link.addEventListener('focus', changeLink);
  link.addEventListener('blur', changeLink);
  link.addEventListener('click', (event) => { event.preventDefault(); });
});
// THIS SELECTOR WONT DO ANYTHING BECAUSE PROPAGATION WAS STOPED
contentPickSection.addEventListener('dblclick', (event) => {
  console.log(`${event.target} ran`);
});
window.addEventListener('keypress', checkSecretAndUnicornThePage);

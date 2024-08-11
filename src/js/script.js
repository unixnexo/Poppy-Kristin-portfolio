/**
 * project section
 */
const cards = document.querySelectorAll('#project-cards-wrapper div');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = index * 300;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.7
});

cards.forEach(card => observer.observe(card));


/**
 * General observer
 */
function observeElementInView(element, callback, threshold = 0.5, options = {}) {
  const observerOptions = {
    threshold,
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is in view, execute the callback
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(element);
}

/**
 * h2 text - project section
 */
function changeTextColor(element) {
    const revealClass = 'text-white';
    const child = element.querySelectorAll('span');
    child[0].classList.add(revealClass);
    setTimeout(() => {
        child[3].classList.add(revealClass);
    }, 500);
    setTimeout(() => {
        child[1].classList.add(revealClass);
    }, 800);
    setTimeout(() => {
        child[2].classList.add(revealClass);
    }, 1000);
}
observeElementInView(document.getElementById('h2'), changeTextColor, 1);





/////////// test



























// const card = document.querySelector('.card');

// document.addEventListener('mousemove', (e) => {
//   rotateElement(e, card);
// });

// function rotateElement (event, element) {
//   const x = event.clientX;
//   const y = event.clientY;

//   // middle of apge
//   const middleX = window.innerWidth / 2;
//   const middleY = window.innerHeight / 2;

//   // offset from middle
//   const offsetX = ((x - middleX) / middleX) * 20;
//   const offsetY = ((y - middleY) / middleY) * 20;

//   element.style.setProperty('--rotateX', -1 * offsetY + 'deg');
//   element.style.setProperty('--rotateY', offsetX + 'deg');
// }


// const card = document.querySelector('.card');
// let hasGoneOVerIt = false;

// card.addEventListener('mouseenter', () => {
//   setTimeout(() => {
//     card.style.transition = 'none';
//   }, 300);
// });

// card.addEventListener('mousemove', (e) => {
//   rotateElement(e, card);
// });

// card.addEventListener('mouseleave', (e) => {
//   card.style.transition = 'transform 0.2s ease-out';
//   card.style.setProperty('--rotateX', '0deg');
//   card.style.setProperty('--rotateY', '0deg');
// });

// function rotateElement(event, element) {
//   const rect = element.getBoundingClientRect();

//   const x = event.clientX - rect.left;
//   const y = event.clientY - rect.top;

//   // middle of card
//   const middleX = rect.width / 2;
//   const middleY = rect.height / 2;

//   // offset from middle
//   const offsetX = ((x - middleX) / middleX) * 20;
//   const offsetY = ((y - middleY) / middleY) * 20;

//   element.style.setProperty('--rotateX', -1 * offsetY + 'deg');
//   element.style.setProperty('--rotateY', offsetX + 'deg');
// }




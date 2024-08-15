/**
 * project section
 */
const cards = document.querySelectorAll('#project-cards-wrapper div');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = index * 100;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
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
observeElementInView(document.getElementById('h2'), changeTextColor, 0.3);

/**
 * places worked section
 */
function randomLetter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function randomizeText(element, iterations, speed) {
  const originalText = element.textContent;
  const words = originalText.split(' ');
  let currentIteration = 0;
  let currentWord = 0;

  const interval = setInterval(() => {
      if (currentIteration < iterations) {
          let randomizedText = words.map((word, i) => {
              if (i < currentWord) {
                  return word;
              }
              return word.split('').map(() => randomLetter()).join('');
          }).join(' ');

          element.textContent = randomizedText;
          currentIteration++;
      } else {
          if (currentWord < words.length) {
              currentIteration = 0;
              currentWord++;
          } else {
              clearInterval(interval);
              element.textContent = originalText;
          }
      }
  }, speed);
}

document.querySelectorAll('#places-worked-section p').forEach(el => {
  observeElementInView(el, () => randomizeText(el, 7, 30), 1);
});

// svg behind h3
const path = document.querySelector('#svg-under-h3 path');
const pathLength = path.getTotalLength();
const section = document.querySelector('#places-worked-section');

const animationStartOffset = 0.2;

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;

  const scrollPosition = window.scrollY + window.innerHeight;
  let scrollPercentage = (scrollPosition - sectionTop - sectionHeight * animationStartOffset) / (sectionHeight * (1 - animationStartOffset));

  const clampedScrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);
  const drawLength = pathLength * clampedScrollPercentage;

  path.style.strokeDashoffset = pathLength - drawLength;
});


/**
 * draw svg when called
 */
function animatePaths(elId) {
  document.querySelector(`#${elId}`).classList.remove('opacity-0');
  const paths = document.querySelectorAll(`#${elId} path`);
  let delay = 0;

  paths.forEach((path, index) => {
    const length = path.getTotalLength();
    
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    setTimeout(() => {
      path.style.transition = `stroke-dashoffset 2s ease`;
      path.style.strokeDashoffset = '0';
    }, delay);

    delay += 1000;
  });
}

/**
 * know me section
 */
const knowMeSection = document.getElementById('know-me-section');
observeElementInView(knowMeSection, () => animatePaths('drawing-self-svg'), 0.3);

/**
 * about me section
 */
const aboutMeSection = document.getElementById('know-me-section');
observeElementInView(knowMeSection, () => {
  setTimeout(() => {
    animatePaths('my-sign-draw');
  }, 30000);
}, 0.3);
observeElementInView(knowMeSection, () => {
  setTimeout(() => {
    animatePaths('my-dream-draw');
  }, 10000);
}, 0.3);
observeElementInView(knowMeSection, () => {
  setTimeout(() => {
    animatePaths('destroy-dream-draw');
  }, 40000);
}, 0.3);




/////////// test























const card = document.querySelector('#contact-me-card');

document.addEventListener('mousemove', (e) => {
  rotateElement(e, card);
});

function rotateElement (event, element) {
  const x = event.clientX;
  const y = event.clientY;

  // middle of apge
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // offset from middle
  const offsetX = ((x - middleX) / middleX) * 20;
  const offsetY = ((y - middleY) / middleY) * 20;

  element.style.setProperty('--rotateX', -1 * offsetY + 'deg');
  element.style.setProperty('--rotateY', offsetX + 'deg');
}


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




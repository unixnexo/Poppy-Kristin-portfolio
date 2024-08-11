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





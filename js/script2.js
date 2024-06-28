const catalogLink = document.querySelector('.footer-link:first-child');

catalogLink.addEventListener('click', function(event) {
  event.preventDefault();

  const card = document.querySelector('#card-1');

  if (card) {
    card.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});

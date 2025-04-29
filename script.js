document.addEventListener('DOMContentLoaded', function () {
  initPopovers();
  initCharacterClicks();
});

const links = document.querySelectorAll('.nav-link');
  const current = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute('href') === current.split('/').pop()) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

function initPopovers() {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  [...popoverTriggerList].forEach(popoverTriggerEl => {
    new bootstrap.Popover(popoverTriggerEl, {
      trigger: 'hover',
      placement: 'right'
    });
  });
}

function initCharacterClicks() {
  document.querySelectorAll('.character').forEach(character => {
    character.addEventListener('click', function () {
      const imgSrc = this.getAttribute('data-img');
      const parentModal = this.closest('.modal-body');
      const targetImg = parentModal.querySelector('img.character-img');
      if (targetImg) {
        targetImg.src = imgSrc;
        targetImg.style.display = 'block';
      }
    });
  });
}

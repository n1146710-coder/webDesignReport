const fab = document.querySelector('.fab');
const toggle = document.getElementById('fabToggle');

toggle.addEventListener('click', () => {
  fab.classList.toggle('open');
});

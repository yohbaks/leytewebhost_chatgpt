document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  const locationButtons = document.querySelectorAll('[data-country]');
  const clearActive = () => {
    locationButtons.forEach((button) => button.classList.remove('active'));
  };

  const setActive = (country) => {
    clearActive();
    locationButtons.forEach((button) => {
      if (button.dataset.country === country) {
        button.classList.add('active');
      }
    });
  };

  menu?.addEventListener('click', () => {
    nav?.classList.toggle('open');
  });

  locationButtons.forEach((button) => {
    const country = button.dataset.country;

    button.addEventListener('mouseenter', () => setActive(country));
    button.addEventListener('focus', () => setActive(country));
    button.addEventListener('mouseleave', clearActive);
    button.addEventListener('blur', clearActive);
  });
});

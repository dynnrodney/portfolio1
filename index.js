const navEnter = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");

  burger.addEventListener('click', () => {
      nav.classList.toggle('links-active');
  })
}

navEnter();

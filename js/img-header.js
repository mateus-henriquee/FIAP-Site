window.onscroll = function () {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const header = document.querySelector('header');
    const logoFiap = document.querySelector('.logo-fiap');
  
    if (winScroll > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
      progressBar.style.width = scrolled + "%";
    }
  };
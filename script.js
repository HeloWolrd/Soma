const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        menuToggle.classList.toggle('ativo');
        menu.classList.toggle('aberto');
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        menu.classList.remove('aberto');
        menuToggle.classList.remove('ativo');
      }
    });
document.querySelector('.btnMenu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav-elementos').classList.toggle('active');
  });
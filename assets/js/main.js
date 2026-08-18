document.addEventListener('DOMContentLoaded', function () {
  // Kontakt forma: potvrda posle uspešnog slanja (formsubmit.co redirect ?poslato=1)
  var params = new URLSearchParams(window.location.search);
  if (params.get('poslato') === '1') {
    var container = document.querySelector('.kontakt-forma');
    if (container) {
      var alertEl = document.createElement('div');
      alertEl.className = 'alert alert-success';
      alertEl.setAttribute('role', 'alert');
      alertEl.textContent = 'Порука је успешно послата. Хвала Вам!';
      container.prepend(alertEl);
    }
  }

  // Kalendar nastupa: prebacivanje između meseci
  var months = document.querySelectorAll('.calendar-month');
  if (months.length) {
    var activeIndex = 0;
    months.forEach(function (m, i) {
      if (m.classList.contains('active')) {
        activeIndex = i;
      }
    });

    var showMonth = function (index) {
      months.forEach(function (m, i) {
        m.classList.toggle('active', i === index);
      });
      activeIndex = index;
      var prevBtn = document.querySelector('.calendar-nav-prev');
      var nextBtn = document.querySelector('.calendar-nav-next');
      if (prevBtn) prevBtn.disabled = activeIndex === 0;
      if (nextBtn) nextBtn.disabled = activeIndex === months.length - 1;
    };

    var prevBtn = document.querySelector('.calendar-nav-prev');
    var nextBtn = document.querySelector('.calendar-nav-next');
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (activeIndex > 0) showMonth(activeIndex - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (activeIndex < months.length - 1) showMonth(activeIndex + 1);
      });
    }
    showMonth(activeIndex);
  }
});

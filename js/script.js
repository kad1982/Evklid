
//  document.addEventListener('keyup', function() {console.log(document.activeElement)})
const swiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {

      spaceBetween: 15
    },
    // when window width is >= 480px

    // when window width is >= 640px
    768: {

      spaceBetween: 50
    },
    1024: {
      spaceBetween: 75
    }

  },

  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Слайд {{index}}'
}
});


document.addEventListener('DOMContentLoaded', function () {
  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.header__nav');
  let menuList = document.querySelectorAll('.header__link');
  // let body = document.body;

  burger.addEventListener('click',
    function (e) {
      e.preventDefault();
      burger.classList.add('burger--active');
      menu.classList.add('header__nav--active');
      document.body.classList.add('stop-scroll');
      let spanIs = document.querySelector('.showClose');
      if (!(typeof (spanIs) != 'undefined' && spanIs != null)) {
      let elm = document.querySelector('.header__nav--active');
      let span = document.createElement("span");
      span.style.display='block';
      span.style.width="23px"
      span.style.height="25px"
      span.classList.add('showClose');
      span.ariaLabel='Закрыть'

      elm.prepend(span);


      // pseudoElm =elm.previousSibling
       span.addEventListener('click', function (e) {
         burger.classList.remove('burger--active');
         menu.classList.remove('header__nav--active');
         document.body.classList.remove('stop-scroll');
       })
      }
    });
  menuList.forEach(function (el) {
    el.addEventListener('click',
      function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
      })
  });


  $(".accordion").accordion({
    heightStyle: "content",
    active: false,
    collapsible: true,
    animate: 1000,
  });
  $(".ui-accordion-header").attr("tabindex","0");

  document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
        btn.classList.remove('tabs-nav__btn--active');

      });
      // e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelector(`[data-path="${path}"]`).classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });

  let divBtn = document.querySelector('.header__search');
  let btn = document.querySelector('.header__search__link')
  btn.addEventListener('click', function () {
    btn.classList.add('displeyNon');
    let divIs = document.getElementById('div__search');

    if (!(typeof (divIs) != 'undefined' && divIs != null)) {
      let div = document.createElement('div');
      let input = document.createElement('input');
      input.type = "text";
      input.placeholder = 'Что будем искать?';

      input.style.marginRight = '14px';
      input.style.border = 'none';
      input.style.borderRadius = '0';
      input.style.borderBottom = '1px solid #CACACA';
      input.id = 'form_search';
      input.addEventListener("focus-visible", function () {
        this.style.borderColor = "red";
      });
      let imgSearch = document.createElement('img');
      imgSearch.src = 'img/search.svg';
      imgSearch.style.height = '24px';
      imgSearch.style.width = '24px';
      imgSearch.style.marginRight = '20px';
      imgSearch.ariaLabel='поиск'
      let imgCloseSearch = document.createElement('img');
      imgCloseSearch.src = 'img/closed_search.svg';
      imgCloseSearch.style.height = '24px';
      imgCloseSearch.style.width = '24px';
      imgCloseSearch.ariaLabel='Закрыть'
      imgCloseSearch.addEventListener('click', function (e) {
        btn.classList.remove('displeyNon');
        let divSearch = document.getElementById('div__search');
        divSearch.style.top = '-100px';
        divSearch.style.opacity = '0';
      })
      div.style.top = '-100px';
      div.style.opacity = '0';
      div.style.transition = 'top .5s, opacity .5s';
      div.style.borderRadius = '24px';
      div.style.display = 'flex';
      div.style.marginLeft = '-250px'
      div.style.backgroundColor = '#FFFFFF';
      div.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.12)';
      div.style.padding = '10px 20px';
      div.style.width = '315px'
      div.style.alignItems = 'center';
      div.style.position = 'absolute';
      div.style.right = '38px';
      div.id = 'div__search';
      div.append(input);
      div.append(imgSearch);
      div.append(imgCloseSearch);
      divBtn.append(div);
      setTimeout(() => {
        div.style.opacity = 1;
        div.style.top = '25px'
      }, 1);
    } else {
      let divSearch = document.getElementById('div__search');
      divSearch.style.top = '25px';
      divSearch.style.opacity = '1';
    }
  })
})


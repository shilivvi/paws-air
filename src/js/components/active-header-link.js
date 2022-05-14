import { throttle } from './../functions/throttle';

(function () {

  const nav = document.querySelector('#main-nav')

  if( !nav ){
    return
  }

  const checkSection = () => {
    let scrollDistance = window.scrollY

    document.querySelectorAll('section').forEach((el) => {
      if( 
        el.offsetTop - document.querySelector('#header').clientHeight <= scrollDistance 
        && el.offsetTop - document.querySelector('#header').clientHeight + el.offsetHeight >= scrollDistance 
      ){
        let href = el?.id

        if( href == '' ){
          return
        }

        nav.querySelectorAll('nav a').forEach(el => {
          el?.classList?.remove('header__link--active')
        })

        nav.querySelector(`a[href="#${href}"]`)?.classList.add('header__link--active')
        
      }
    })

  }

  window.addEventListener('scroll', throttle(checkSection))

}());
import { throttle } from './../functions/throttle';
//import { isMobile, isTablet } from './../functions/check-viewport';

(function () {

  const header = document.querySelector('#header')
  const main = document.querySelector('main')

  // if( !header || !isMobile() && !isTablet() ){
  //   return
  // }

  if( !header ){
    return
  }

  const fixHeader = () => {
    const headerHeight = header.offsetHeight
    const scrollY = window.scrollY

    if( headerHeight + 150 < scrollY && !header.classList.contains('header-fixed') ){
      header.classList.add('header-fixed')
      header.style.top = -header.offsetHeight - 1 + 'px'
      main.style.paddingTop = headerHeight + 'px'
    }else if( headerHeight + 150 > scrollY ){
      header.classList.remove('header-fixed')
      main.style.paddingTop = null
      header.style.transform = null
    }

  }

  window.addEventListener('scroll', throttle(fixHeader))

}());
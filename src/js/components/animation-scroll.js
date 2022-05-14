import smoothscroll from 'smoothscroll-polyfill';

(function () {
  smoothscroll.polyfill();
  
  const mainNav = document.querySelector('#main-nav');
  
  if( mainNav ){
    const links = mainNav.querySelectorAll('a')
    links.forEach( link => {
      const selector = link.getAttribute('href')?.replace(window.location.origin + '/', '')

      if( selector == '#' || selector == '' ){
        return
      }

      const elemTo = document.querySelector(`${selector}`)

      if( !elemTo ){
        return
      }

      scroll( link, elemTo )
    })
  }

  const elems = document.querySelectorAll('[data-move]')

  if( elems.length > 0 ){
    elems.forEach( item => {
      const selector = item.getAttribute('data-move')

      if( selector == '#' || selector == '' ){
        return
      }

      const elemTo = document.querySelector(`${selector}`)

      scroll( item, elemTo )
    })
  }

}());

function scroll(elem, elemTo){
  const offset = 100;
  elem.addEventListener('click', (e) => {
    e.preventDefault()    
    const y = elemTo.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({top: y, behavior: 'smooth'});
  })
}
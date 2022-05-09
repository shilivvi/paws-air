import { tns } from 'tiny-slider'
import { isMobile, isTablet, isDesktop } from './../functions/check-viewport';

const aircraftCarousel = document.querySelector('#aircraft-carousel')

if( aircraftCarousel ){
  const prevBtn = document.querySelector('#aircraft-carousel-prev')
  const nextBtn = document.querySelector('#aircraft-carousel-next')

  const aircraftTns = tns({
    container: '#aircraft-carousel',
    gutter: 30,
    slideBy: 'page',
    mouseDrag: true,
    lazyload: true,
    loop: false,
    controls: false,
    nav: false,
    responsive: {
      1211: {
        items: 2
      },
      768: {
        items: 3
      },
      576: {
        items: 2,
      },
      320: {
        items: 1,
        gutter: 15
      }
    }
  })  

  btnEvents(prevBtn, nextBtn, aircraftTns)
}

const informationCarousel = document.querySelector('#information-carousel')

if( (isTablet() || isMobile()) && informationCarousel){

  const prevBtn = document.querySelector('#information-carousel-prev')
  const nextBtn = document.querySelector('#information-carousel-next')

  const informationTns = tns({
    container: '#information-carousel',
    slideBy: 'page',
    items: 1,
    autoHeight: true,
    mouseDrag: true,
    loop: false,
    controls: false,
    nav: false,
  })

  btnEvents(prevBtn, nextBtn, informationTns)
}

const customersSlider = document.querySelector('#customers-slider')

if(customersSlider){

  const prevBtn = document.querySelector('#customers-slider-prev')
  const nextBtn = document.querySelector('#customers-slider-next')

  const customersTns = tns({
    container: '#customers-slider',
    slideBy: 'page',
    items: 3,
    gutter: 30,
    lazyload: true,
    mouseDrag: true,
    loop: false,
    controls: false,
    nav: false,
    responsive: {
      768: {
        items: 3
      },
      576: {
        items: 2,
      },
      320: {
        items: 1,
      }
    }
  })

  btnEvents(prevBtn, nextBtn, customersTns)
}

function btnEvents(prevBtn, nextBtn, slider){
  if( prevBtn && nextBtn ){
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault()
      slider.goTo('prev')
    })

    nextBtn.addEventListener('click', (e) => {
      e.preventDefault()
      slider.goTo('next')
    })

    slider.events.on('indexChanged', ({index, items, slideCount}) => {
      //disabled next btn
      if( (((index / items) + 1) * items) >= slideCount  ){
        nextBtn.disabled = true
      }else{
        nextBtn.disabled = false
      }

      //disabled prev btn
      if( (index / items) === 0 ){
        prevBtn.disabled = true
      }else{
        prevBtn.disabled = false
      }     
    })
  }
}
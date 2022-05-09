import { tns } from 'tiny-slider'

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

  if( prevBtn && nextBtn ){
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault()
      aircraftTns.goTo('prev')
    })

    nextBtn.addEventListener('click', (e) => {
      e.preventDefault()
      aircraftTns.goTo('next')
    })

    aircraftTns.events.on('indexChanged', ({index, items, slideCount}) => {
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
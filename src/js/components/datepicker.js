import { Datepicker } from 'vanillajs-datepicker';

(function () {
  
  const datepickerInputs = document.querySelectorAll('[data-datepicker]')

  datepickerInputs?.forEach( el => {

    const input = el.querySelector('input')
    const params = {
      language: 'en'
    }
    const start = el.getAttribute('data-start')
    const end = el.getAttribute('data-end')

    if( start == 'now' ){
      params.minDate = Date.now()
    }
    
    if( end ){
      const date = new Date()
      date.setFullYear(date.getFullYear() - parseInt(end))
      params.minDate = date
    }

    new Datepicker(input, params)
  })

}());
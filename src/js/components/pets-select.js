(function () {
  
  const select = document.querySelector('#pets-select')

  if( !select ){
    return
  }

  setTimeout(() => showHideInputs( select.value ), 5000);

  select.addEventListener('change', () => {
    showHideInputs( select.value )
  }) 

  function showHideInputs (val) {
    const section = document.querySelector('#pets-section')
    const nameWrapInputs = [...section.querySelectorAll('.registration-form__col--name')]
    const weightWrapInputs = [...section.querySelectorAll('.registration-form__col--weight')]

    nameWrapInputs.forEach( el => {
      if( el.classList.contains('registration-form__col--hide') ){
        el.querySelector('input').value = ''
        el.classList.remove('registration-form__col--hide')
      }
    })
    weightWrapInputs.forEach( el => {
      if( el.classList.contains('registration-form__col--hide') ){
        el.querySelector('input').value = ''
        el.classList.remove('registration-form__col--hide')
      }
    })

    const x = nameWrapInputs.length - val

    if( x === 0 ){
      return
    }

    nameWrapInputs.slice(-x).forEach( el => {
      el.querySelector('input').value = 'hide'
      el.classList.add('registration-form__col--hide')
    })
    weightWrapInputs.slice(-x).forEach( el => {
      el.querySelector('input').value = '0'
      el.classList.add('registration-form__col--hide')
    })
  }

}());
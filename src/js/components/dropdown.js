const dropdown = document.querySelectorAll('[data-dropdown]')
if( dropdown.length > 0 ){

  dropdown.forEach(item => {
    const openBtn = item.querySelector('.dropdown-timetable__btn')
    const data = item.getAttribute('data-dropdown')
    const dropdownBlock = document.querySelector(`[data-dropdown-block="${data}"]`)

    if( dropdownBlock ){
      const listBtns = item.querySelectorAll('ul button')

      listBtns.forEach((item, index) => {
        item.setAttribute('data-dropdown-btn', index)

        item.addEventListener('click', (e) => {
          e.preventDefault();
          const data = item.getAttribute('data-dropdown-btn')
          dropdownBlock.querySelector('.timetable__route--show')?.classList.remove('timetable__route--show')
          dropdownBlock.querySelector(`[data-dropdown-show="${data}"]`).classList.add('timetable__route--show')
          openBtn.querySelector('span').innerHTML = item.innerHTML
        })

      })

      dropdownBlock.querySelectorAll('.timetable__route').forEach((item, index) => {
        item.setAttribute('data-dropdown-show', index)
      })

      listBtns[0].click();
    }

    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const list = item.querySelector('ul')

      openBtn.classList.toggle('open')
      list.classList.toggle('show')

      if( openBtn.classList.contains('open') ){
        openBtn.setAttribute('aria-expanded', 'true')
        list.setAttribute('aria-hidden', 'false')
        list.style.maxHeight = list.scrollHeight + 'px'
      }else{
        openBtn.setAttribute('aria-expanded', 'false')
        list.setAttribute('aria-hidden', 'true')
        list.style.maxHeight = null
      }
    })
  });
}
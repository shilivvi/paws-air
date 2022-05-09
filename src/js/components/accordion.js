const faqAccordion = document.querySelector('.faq__list')

if( faqAccordion ){
  const items = faqAccordion.querySelectorAll('.faq__item')

  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const self = e.currentTarget;
      const control = self.querySelector('button')
      const content = self.querySelector('.faq__answer')

      self.classList.toggle('faq__item--open')

      if(self.classList.contains('faq__item--open')){
        control.setAttribute('aria-expanded', 'true')
        content.setAttribute('aria-hidden', 'false')
        content.style.maxHeight = content.scrollHeight + 'px'
      }else{
        control.setAttribute('aria-expanded', 'false')
        content.setAttribute('aria-hidden', 'true')
        content.style.maxHeight = null
      }
    })
  })
}
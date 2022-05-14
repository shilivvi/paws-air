import JustValidate from 'just-validate';

const heroForm = document.querySelector('.from-hero__form')

if( heroForm ){

  const heroValidate = new JustValidate(
    heroForm,
    {
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'is-label-invalid',
      focusInvalidField: true,
      lockForm: true
    }
  )
  .addField('#hero-name', [
    {
      rule: 'required',
    }
  ])
  .addField('#hero-number', [
    {
      rule: 'required',
    },
    {
      rule: 'number',
    }
  ])
  .addField('#hero-email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
    }
  ])
  .addField('#hero-privacy', [
    {
      rule: 'required',
      errorMessage: false
    }
  ])
  .addField('#hero-receive', [
    {
      rule: 'required',
      errorMessage: false
    }
  ])
}

const modalForm = document.querySelector('.modal-form__form')
if( modalForm ){
  const modalValidate = new JustValidate(
    modalForm,
    {
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'is-label-invalid',
      focusInvalidField: true,
      lockForm: true
    }
  )
  .addField('input[name="name"]', [
    {
      rule: 'required'
    }
  ])
  .addField('input[name="phone"]', [
    {
      rule: 'required'
    },
    {
      rule: 'number',
    }
  ])
  .addField('input[name="email"]', [
    {
      rule: 'required'
    },
    {
      rule: 'email',
    }
  ])
  .addField('input[name="privacy-policy"]', [
    {
      rule: 'required',
      errorMessage: false
    }
  ])
  .addField('input[name="receive-emails"]', [
    {
      rule: 'required',
      errorMessage: false
    }
  ])
}

const registrationForm = document.querySelector('#registration-form')
if( registrationForm ){

  const registrationValidate = new JustValidate(
    registrationForm,
    {
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'is-label-invalid',
      focusInvalidField: true,
      lockForm: true
    }
  )
  .addField('input[name="first-name"]', [
    {
      rule: 'required' 
    }
  ])
  .addField('input[name="last-name"]', [
    {
      rule: 'required' 
    }
  ])
  .addField('input[name="date-of-birth"]', [
    {
      rule: 'required' 
    }
  ])
  .addField('input[name="house"]', [
    {
      rule: 'required' 
    }
  ])
  .addField('input[name="street"]', [
    {
      rule: 'required' 
    }
  ])
  .addField('input[name="unit"]', [
    {
      rule: 'required' 
    }
  ])
  .addField('input[name="city"]', [
    {
      rule: 'required' 
    }
  ])
  .addField('input[name="state"]', [
    {
      rule: 'required' 
    }
  ])
  .addField('input[name="zip"]', [
    {
      rule: 'required' 
    }
  ])
  .addField('input[name="email"]', [
    {
      rule: 'required'
    },
    {
      rule: 'email',
    }
  ])
  .addField('input[name="phone"]', [
    {
      rule: 'required'
    },
    {
      rule: 'number',
    }
  ])
  .addField('select[name="position"]', [
    {
      rule: 'required'
    }
  ])
  .addField('input[name="pet-name-1"]', [
    {
      rule: 'required'
    }
  ])
  .addField('input[name="pet-weight-1"]', [
    {
      rule: 'required'
    }
  ])
  .addField('input[name="privacy-policy"]', [
    {
      rule: 'required',
    }
  ])
  .addField('input[name="receive-emails"]', [
    {
      rule: 'required'
    }
  ])

  const names = ['Koopper', 'Milo', 'Charlie', 'Finn']
  const amount = registrationForm.querySelector('select[name="amount"]')
  const wrap = registrationForm.querySelector('#pets-section')

  amount.addEventListener('change', () => {
    
    const petsCount = amount.value
    const countCol = wrap.querySelectorAll('.registration-form__col').length / 2

    if( countCol > petsCount ){
      [...wrap.querySelectorAll('.registration-form__col--name')].slice(petsCount).forEach(item => {
        registrationValidate.removeField(`input[name="${item.querySelector('input').getAttribute('name')}"]`)
        item.remove()
      });
      [...wrap.querySelectorAll('.registration-form__col--weight')].slice(petsCount).forEach(item => {
        registrationValidate.removeField(`input[name="${item.querySelector('input').getAttribute('name')}"]`)
        item.remove()
      });
    }else if( countCol < petsCount ){
      const nameColTemplate = document.querySelector('#pet-name')
      const weightColTemplate = document.querySelector('#pet-weight')  

      for( let i = countCol + 1; i <= petsCount; i++ ){
        const nameCol = nameColTemplate.content.cloneNode(true)
        const weightCol = weightColTemplate.content.cloneNode(true)

        nameCol.querySelector('input').setAttribute('name', `pet-name-${i}`)
        nameCol.querySelector('input').setAttribute('placeholder', names[i-1])
        weightCol.querySelector('input').setAttribute('name', `pet-weight-${i}`)

        const inputNameAtr = nameCol.querySelector('input').getAttribute('name')
        const inputweightAtr = weightCol.querySelector('input').getAttribute('name')

        wrap.append(nameCol)
        wrap.append(weightCol)

        registrationValidate.addField(`input[name="${inputNameAtr}"]`, [{rule: 'required'}])
        registrationValidate.addField(`input[name="${inputweightAtr}"]`, [{rule: 'required'}])
      }
    }

  })

}
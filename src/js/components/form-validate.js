import JustValidate from 'just-validate';

const heroForm = document.querySelector('.from-hero__form');

if( heroForm ){
  const heroValidate = new JustValidate(
    '.from-hero__form',
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
}

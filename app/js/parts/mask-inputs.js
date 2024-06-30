const feedbackForm = document.querySelector(".feedback-form");

if(feedbackForm) {
  let validateFeedbackForm = new window.JustValidate(feedbackForm, {
    errorFieldCssClass: 'bg-white w-[354px]',
    errorLabelCssClass: 'bg-white w-full px-2 text-[14px] absolute -bottom-6 lg:-bottom-4',
  });
  let userphoneInput = feedbackForm.querySelector(".feedback-user-phone");
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(userphoneInput);


  validateFeedbackForm
    .addField("#user-name", [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'customRegexp',
        value: "[а-яё]",
        errorMessage: 'Допустимы только кирилица',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Максимум 30 символов',
      }
    ])
    .addField("#user-phone", [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательно',
      },
      {
        validator: (value, context) => {
          return value.replace(/\D/g, '').length === 11;
        },
        errorMessage: 'Введите номер полностью',
      },

    ])
}



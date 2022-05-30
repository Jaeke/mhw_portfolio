import * as Yup from 'yup';

// must include @ and .com
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const formValidation = Yup.object().shape({
  emailFrom: Yup.string()
    .matches(emailRegex, 'invalid format must include "@" and ".com"')
    .required('Required'),
  emailSubject: Yup.string().required('Required'),
  emailMessage: Yup.string().required('Required'),
});

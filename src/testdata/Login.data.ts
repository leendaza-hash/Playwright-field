export function loginData() {
  return {
    validUser: {
      email: process.env.VALID_EMAIL1!,
      password: process.env.VALID_PASSWORD1!
    },

    invalidUser: {
      email: process.env.INVALID_EMAIL!,
      password: process.env.INVALID_PASSWORD!
    },

    validEmailInvalidPassword: {
      email: process.env.VALID_EMAIL1,
      password: process.env.WRONG_PASSWORD!
    },
    
    invalidEmailValidPassword: {
      email: process.env.INVALID_EMAIL!,
      password: process.env.VALID_PASSWORD1
    }

  };
}
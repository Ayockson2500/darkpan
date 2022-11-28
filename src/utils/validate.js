export const passwordIsValid = (password) => {
   
    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
  
    return passwordRegex.test(password);
  };
  
  export const emailValidation = (email) => {
      let regex = /\S+@\S+\.\S+/;
      return regex.test(email);
  };
  
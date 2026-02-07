export const formValidate = (email,password)=>{
    const isValidEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isValidEmail)  return "Email is not valid";
    if(!isValidPassword) return "Password is not valid";
    return null


}

import Profile from "../Profile"
const Authorization = () => {
    const login = document.getElementById("login")
    const password = document.getElementById("password")  
    //проверяем ввод
    function checkValie (valueOne, valueTwo){
        return (valueOne == "Admin"&& valueTwo =="12345") 
    }
    
    const check = checkValie (login.value, password.value)
  
if (check){
    localStorage.setItem('Admin', true);
    return <Profile/>
} else {
    alert("Имя пользователя или пароль введены не верно")
    login.value = "";
    password.value = ""
    window.location.pathname = "/"
    console.log(check)
    console.log( window.location.pathname)
    }   
}

export default Authorization;
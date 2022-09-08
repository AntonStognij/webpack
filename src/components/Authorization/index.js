// import footer from "assets/footer.png"
import Profile from "../Profile"
const Authorization = () => {
    const login = document.getElementById("login")
    const password = document.getElementById("password")
    console.log(login.value, password.value)
    function checkValie (valueOne, valueTwo){
        return (valueOne == "Admin"&& valueTwo =="12345") 
    }
    const check = checkValie (login.value, password.value)
if (check){
    localStorage.setItem('Admin', true);
    
} 
    return check && (
        <div>
            <Profile/>
        </div>
    )

    
}

export default Authorization;
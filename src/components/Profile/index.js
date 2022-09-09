import { Link } from "react-router-dom";
import avatar from "assets/avatar.png"
import img3 from "assets/img3.jpg"
const Profile = () => {
    //смотрим есть ли запись 
    const isLocal = JSON.parse(localStorage.getItem('Admin'))
    return isLocal ? (
   <main className="wrap main block-profile">
    <div className="block-user">
       <img className = "avatar"  src= {avatar} alt="avatar"/>
       <h1>User</h1>
       <p>mail:<span>test@gmail.com</span></p>
       <p>tel:<span>+3800000000</span></p>
    </div>
    <div className="courses">
        <h2>Купленные курсы</h2>
        <div className="course">
            <h3>Курс по увеличению прыжка</h3>
            <p>Пройдя полный курс (15 недель) вы увеличите свой прыжок на 20–35 см.</p>
            <div className="with"><span>100%</span></div>
        </div>
        <div className="course">
            <h3>Курс по технике броска</h3>
            <p>Пройдя полный курс (20 недель) вы значительно улучшите свой бросок</p>
            <div className="withTwo"><span>80%</span></div>
        </div>
    </div>
   </main>
        
    ) :(
        <main className="wrap-login wrap">
            <img className = "img3"  src= {img3} alt="img3"/>
            <div className="login">
             <input type="text" id="login" placeholder="Введите ваш login"></input>
            <input type="text" id="password" placeholder="Введите ваш password"></input>
            <Link to="/authorization"><div className="btn">ОК</div> </Link>
            </div>
        </main>
        
    )
}

export default Profile
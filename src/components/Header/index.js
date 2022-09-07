import React, {useContext} from "react";
import { ContextСhoice } from "store/context";
import { Link } from "react-router-dom";



const Header = () => {
    
    const {choice, setСhoice} = useContext(ContextСhoice)
    return (
        <header>
        <div className="header-block-one-bg">
        <div className="wrap header-block-one">
            <div className="header-block-one-left">
                <div className="header-block-one-left-language">
                    <span>
                        Language:
                    </span>
                    <select name="language">
                    <option value="1">English</option>
                    </select>
                </div>
            <div>
                <span>
                    Currency:
                </span>
                <select name="currency">
                    <option value="1">USD</option>
                </select>
            </div>
            </div>
                <ul className="header-block-one-right">
                    <li><Link to="/ggg">Account</Link></li>
                    <li><Link to="/ggg">Wishlist</Link> </li>
                    <li><Link to="/ggg">Checkout</Link> </li>
                    <li><Link to="/ggg">Log in </Link> </li>
                    <li><Link to="/ggg">Sign in</Link></li>
                </ul>
        </div>
        
    </div>
    <div className="wrap header-block-two">
            <h1>LEO SHOP</h1>
            <ul className="header-block-two-left">
                    <li><Link to="/home">HOME</Link> </li>
                    <li><Link to="/ggg">WOMEN</Link> </li>
                    <li><Link to="/ggg">MEN</Link> </li>
                    <li><Link to="/ggg">OTHER</Link> </li>
                    <li><Link to="/goods">PURCHASE</Link> </li>
            </ul>
            <div className="header-block-two-right">
            
                <div className="input">
                     <input className="search" type="text" placeholder="Search.."></input>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                </div>
                <Link to="/ggg"><div className="shopping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>   </div></Link>
                
                <Link to="/basket"><div className=" shopping-cart"><div className="shopping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg> </div>  <div className="card"> <span> CART  </span> <span> ({choice.length})  </span></div></div></Link>
               
              
               
           
            </div>
    </div>
    </header>
    )
}

export default Header;

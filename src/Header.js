import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth} from './firebase';
function Header( ) {
    const [{ user,basket }, dispach] =useStateValue ();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      };
    return (
    <div className="header">
        <Link to='/' >
        <img
          
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
          className="header__logo"
        />
        </Link>
        <div className="header__search" type="text">
        <input className="header__searchInput"  />
        <SearchIcon className="header__searchIcon"/>
        
        </div>
        <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearlink">
          <div onClick={handleAuthenticaton } className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to='/orders' className='header__clearlink'>
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
            <Link to='/checkout' className="header__clearlink">
            <div class="header__optionBasket">
                  <ShoppingBasketIcon/>
                  <span className="header__optionLineTwo header__basketCount"/>
                  {basket?.length}<span/>
                      
  
                   
            </div>
            </Link>
        </div>
    
    </div>
    )
}

export default Header

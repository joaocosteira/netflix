import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

    const [show,handleShow] = useState(false);
   
    const transitionNavbar = () => {

        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }

    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar); 
        return ()  =>  window.removeEventListener('scroll',transitionNavbar)
    },[]);


    return(
        <div className={`nav ${ show && "nav__black" }`}>
            <div className='nav__contents'>
                <Link to='/'>
                    <img className='nav__logo' src='/netflix_logo.png' alt="netflix logo"/>
                </Link>
                <Link to='/profile'>
                    <img className='nav__avatar' src='/netflix-avatar.png' alt="netflix profile"/>
                </Link>
            </div>
        </div>
    )

}


export default Nav;
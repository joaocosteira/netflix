import { useEffect, useState } from 'react';
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
                <img className='nav__logo' src='/netflix_logo.png' alt="netflix logo"/>
                <img className='nav__avatar' src='/netflix-avatar.png' alt="netflix profile"/>
            </div>
        </div>
    )

}


export default Nav;
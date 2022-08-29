import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const ProfileScreen =  () => {

    const user = useSelector(selectUser);

    return(
        <div className="profileScreen">
            <Nav />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img src='/netflix-avatar.png' alt='avatar logo'/>
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen__plans'>
                            <h3>Plans (Current Plan: Premium)</h3>

                            <div className='profileScreen__plansRow'>
                                <div>
                                    <p>Netflix Standard</p>
                                    <p>1080p</p>
                                </div>
                                <button>Subscribe</button>
                            </div>

                            <div className='profileScreen__plansRow'>
                                <div>
                                    <p>Netflix Basic</p>
                                    <p>720p</p>
                                </div>
                                <button>Subscribe</button>
                            </div>

                            <div className='profileScreen__plansRow planSelected'>
                                <div>
                                    <p>Netflix Premium</p>
                                    <p>4k + HRD</p>
                                </div>
                                <button>Current Package</button>
                            </div>


                            <button 
                                className='profileScreen__signOut'
                                onClick={() =>{ signOut(auth) }}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
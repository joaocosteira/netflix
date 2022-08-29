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
                            <h3>Plans</h3>
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
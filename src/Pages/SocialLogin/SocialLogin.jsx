import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
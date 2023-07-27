import React, { useContext, useState } from 'react';
import img from '../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [messageError, setMessageError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // const all = { name, email, password };
        // console.log(all);
        setMessageError("");
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(name, photo);
                Swal.fire({
                    title: 'User Sign Up successful, Login Now!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate('/login');
                form.reset();
            })
            .catch(error => {
                console.log(error)
                const errorMessage = error.message;
                setMessageError(errorMessage)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center text-teal-950">Signup</h1>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URl</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <p className='text-[red] mt-6 text-center'>{messageError}</p>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline text-teal-950" type="submit" value="Sign Up" /> <br />
                                    <SocialLogin></SocialLogin>
                                    <br />
                                    <p className='my-4 text-center'>Already have an account? <Link to='/login' className='no-underline text-orange-600 font-bold'>Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
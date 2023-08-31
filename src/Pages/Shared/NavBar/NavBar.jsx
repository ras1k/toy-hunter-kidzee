import { useContext } from 'react';
import logo from '../../../assets/kidzee-logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    const navItems =
        <>
            <li className='text-white'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className='text-white'>
                <NavLink to='/allToys'>All Toys</NavLink>
            </li>
            <li className='text-white'>
                <NavLink to='/blog'>Blogs</NavLink>
            </li>
            <li className='text-white'>
                <NavLink to='/about'>About us</NavLink>
            </li>
            {user?.email ? <>
                <li className='text-white'><NavLink to='/myToys'>My Toys</NavLink></li>
                <li className='text-white'><NavLink to='/addToy'>Add A Toy</NavLink></li>
            </> :
                <li className='text-white'></li>}
        </>

    return (
        <div className="navbar flex items-center bg-gradient-to-l from-teal-950 to-black p-3 rounded-b-lg top-0 mb-4">
            <div className="navbar-start flex">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-teal-950 to-black rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" ><img src={logo} className='lg:w-1/6 w-1/2 bg-white p-1 rounded-lg' alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.displayName && (
                    <p className='text-white'>{user.displayName}</p>
                )}
                {user?.photoURL && (

                    <img className="w-12 h-12 mx-3 rounded-full" src={user.photoURL} alt="user profile" />
                )}
                {user?.email ? <>
                    <button className="btn btn-outline text-white btn-neutral" onClick={handleLogOut}>Logout</button>
                </> :
                    <Link to='/login'><button className="btn text-white btn-sm md:btn-md btn-outline btn-neutral">Login</button></Link>}
            </div>
        </div>
    );
};

export default NavBar;
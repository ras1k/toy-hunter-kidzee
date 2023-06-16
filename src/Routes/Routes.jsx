import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import AllToys from "../Pages/Toys/AllToys/AllToys";
import ToyDetails from "../Pages/Toys/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../Pages/Toys/AddToy/AddToy";
import MyToys from "../Pages/Toys/MyToys/MyToys";
import UpdatedToy from "../Pages/Toys/MyToys/UpdatedToy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/allToys')
            },
            {
                path: 'toyDetails/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path: 'addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/updatedToy/:id',
                element: <UpdatedToy></UpdatedToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
        ]
    }
]);

export default router;
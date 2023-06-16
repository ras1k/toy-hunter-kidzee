import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import MyToy from './MyToy';


const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toyData, setToyData] = useState([])
    const url = `http://localhost:5000/allToys?email=${user.email}`;
    console.log(url)
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setToyData(data))
    },[]);
    
    // const handleDelete = id =>{
    //     const proceed = confirm("are you sure you want to delete?")
    //     if(proceed){
    //         fetch(`https://y-mbff8sd27-afridimhrj10-gmailcom.vercel.app/allToy/${id}`, {
    //             method:"DELETE"
    //         })
    //         .then(res => res.json())
    //         .then(data =>{
    //             console.log(data);
    //             if(data.deletedCount > 0){
    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: 'Data has been deleted',
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                   })

    //                   const remaining = toyData.filter(toy => toy._id !== id);
    //                   setToyData(remaining);
    //             }
    //         })
    //     }

    // }
    return (
        <div>
           {
                toyData.map(toy => <MyToy key={toy._id} toy={toy}></MyToy>)
           }
        </div>
    );
};

export default MyToys;
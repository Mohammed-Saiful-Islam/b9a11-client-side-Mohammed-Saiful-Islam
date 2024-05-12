import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers]=useState(loadedUsers);

    const handleDelete=id=>{
        // make sure user is confirmed to delete
        fetch(`https://coffee-store-server-dun-delta.vercel.app/user/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount>0) {
                console.log('deleted successfully');
                // remove the user from the UI
                const remainingUsers=users.filter(user=>user._id!==id);
                setUsers(remainingUsers);
            }
        })
    }

    return (
        <div className="">
            <Navbar/>
     <div className="overflow-x-auto max-w-6xl mx-auto">
     <h2 className="text-center font-bold text-3xl">Students: {loadedUsers.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user=> <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td><button onClick={()=>handleDelete(user._id)} className="btn">X</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>   
            <Footer/>           
        </div>
    );
};

export default Users;
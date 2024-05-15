import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id,photo,spotName,countryName,location,description,cost,seasonality,time,visitor,email,userName } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://coffee-store-server-dun-delta.vercel.app/coffee/${_id}`,{
                method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining=coffees.filter(cof=>cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className=" bg-orange-950 shadow-xl">
            <div>
            <img className='max-h-48' src={photo} alt="TouristSpot" />
            </div>
            <div className="card-actions justify-end">
                    <div className=" space-y-4 ">
                        
                        <button className="btn bg-green-600 text-white hover:text-black">Join</button>
                        
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600 text-white hover:text-black">Delete</button>
                    </div>
            <div className="flex justify-between w-full pr-4">
                <div className='text-white'>
                    <h1 className='text-2xl'>Category: {countryName}</h1>
                    <h2 className="card-title">Assignment Name: {spotName}</h2>
                    <p to={location} target='blank'>Purpose: {location}</p>
                    {/* <h3>Short Description: {description}</h3>
                    <h4>Average Cost: {cost}</h4>
                    <h5>Seasonality: {seasonality}</h5>
                    <h6>Tourism Duration: {time}</h6>
                    <p>Average Total Visitors: {visitor}</p>
                    <p>User Email: {email}</p>
                    <p>User Name: {userName}</p> */}
                    {/* <p>{quantity}</p> */}
                    {/* <p>{supplier}</p> */}
                    {/* <p>{taste}</p> */}
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
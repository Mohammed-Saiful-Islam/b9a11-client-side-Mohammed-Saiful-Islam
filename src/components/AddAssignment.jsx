import Swal from 'sweetalert2';
import Navbar from './Navbar';
import Footer from './Footer';

const AddAssignment = () => {
    const handleAddCoffee=event=>{
        event.preventDefault();

        const form=event.target;

        const photo=form.photo.value;
        const spotName=form.spotName.value;
        const countryName=form.countryName.value;
        const location=form.location.value;
        const description=form.description.value;
        const cost=form.cost.value;
        const seasonality=form.seasonality.value;
        const time=form.time.value;
        const visitor=form.visitor.value;
        const email=form.email.value;
        const userName=form.userName.value;
        
        
        const newCoffee={photo,spotName,countryName,location,description,cost,seasonality,time,visitor,email,userName}
        console.log(newCoffee);

        // send data to the server
      fetch('https://coffee-store-server-dun-delta.vercel.app/assignment',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newCoffee)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      })
    }
    return (
        <div>
            <Navbar/>
            <div className="bg-[#F4F3F0] p-24">
            
            <h1 className="text-3xl font-extrabold">Add a Tourists Spot</h1>
            <form onSubmit={handleAddCoffee}>
                
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input name="photo" type="text" placeholder="Please place an image url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tourists Spot Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input name="spotName" type="text" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input name="countryName" type="text" placeholder="Country Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            
                            <input name="location" type="text" placeholder="Please place a location link" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                {/* ************************* */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            
                            <input name="description" type="text" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <label className="input-group">
                            
                            <input name="cost" type="text" placeholder="Average Cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* ************************* */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <label className="input-group">
                            
                            <input name="seasonality" type="text" placeholder="Seasonality - like summer, winter etc" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <label className="input-group">
                            
                            <input name="time" type="text" placeholder="Travel Time => like - 7 days" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* ************************* */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <label className="input-group">
                            
                            <input name="visitor" type="text" placeholder="Total Vistors Per Year => like 10000" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            
                            <input name="email" type="email" placeholder="example@email.com" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
             
                <div className="md:flex ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input name="userName" type="text" placeholder="User Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Tourists Spots" className="btn btn-block mt-8" />
            </form>
            
        </div>
        <Footer/>
        </div>
    );
};

export default AddAssignment;
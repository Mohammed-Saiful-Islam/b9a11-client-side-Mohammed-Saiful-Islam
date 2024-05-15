import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SignIn = () => {

  const {signInUser}=useContext(AuthContext);

  const handleSignIn=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);

    signInUser(email,password)
    .then(result=>{
      console.log(result.user);
      const user={
        email,lastLoggedAt:result.user?.metadata?.lastSignInTime
      }
      // update last logged at in the database
      fetch('https://coffee-store-server-dun-delta.vercel.app/user',{
        method: 'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
    })
    .catch(error=>{
      console.log(error);
    })
  }
    return (
        <div>
          <Navbar/>
            <div className="hero min-h-screen bg-base-200">
  <div className="space-y-4">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-orange-950">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body bg-orange-950 rounded-xl">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white hover:bg-white">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary hover:bg-orange-600">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
<Footer/>
        </div>
    );
};

export default SignIn;
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SignUp = () => {

  const { createUser } = useContext(AuthContext);

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        // new user has been created
        const createAt = result.user?.metadata?.creationTime;
        const user = { email, createdAt: createAt };
        fetch('https://coffee-store-server-dun-delta.vercel.app/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              console.log('user added to the databse')
            }
          })
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div>
      <Navbar/>
       <div className="hero min-h-screen bg-base-200">
      
      <div className="space-y-4">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange-950">Sign up now!</h1>

        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body bg-orange-950 rounded-xl">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-white hover:bg-white">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary hover:bg-orange-600">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
   
  );
};

export default SignUp;
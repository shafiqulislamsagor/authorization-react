import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextCreate } from "./AuthProvider";
import toast from "react-hot-toast";

const LogIn = () => {
    const contextInfo = useContext(ContextCreate)
    const {SignInUser,user} = contextInfo
    const formHandle = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(password.length < 8){
            return toast.error('password minimum 8 characters')
        }
        else if(user){
            toast.error('please logout your account then login')
            return
        }
        console.log(email,password);
        SignInUser(email,password)
        .then(()=>{
            toast.success('Success Log-in !!')
        })
        .catch(error =>{
            toast.error(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="lg:w-2/5 mx-auto hero-content flex-col">
                <div>
                    <h1 className="text-5xl font-bold">Log-In now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={formHandle} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>Create New Account ? <Link to='/register'><button className="btn btn-active btn-link px-0">Register</button></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
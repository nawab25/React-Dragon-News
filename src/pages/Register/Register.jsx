import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        // create user 
        createUser(email, password)
            .then(() => {
                navigate('/');
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-1/2">
                <h1 className="text-4xl font-bold text-center pb-10">Register your account</h1>
                <div className="card w-full shadow-lg bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter you name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        </div>
                        <div className="flex items-center gap-2">
                            <input className="size-4 cursor-pointer" type="checkbox" name="check" id="check" />
                            <label htmlFor="check">Accept our <Link className="font-medium">Terms & Conditions</Link></label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary text-white text-lg">Register</button>
                        </div>
                        <p>Already have an account? <Link to="/login" className="text-blue-600 underline font-medium">Login</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;
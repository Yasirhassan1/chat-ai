import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useGoogleSignin } from "../hooks/useGoogleSignin";
import { useFacebookSignin } from "../hooks/useFacebookSignin";

export function SignUp(){

 const {signInWithGoogle} = useGoogleSignin();
 const {signInWithFacebook} = useFacebookSignin();


    return(
        <div className="p-3 rounded-lg flex flex-col gap-3  h-screen items-center justify-center">
            <div className="max-w-xl w-full bg-white shadow rounded-lg p-4 flex flex-col gap-4">
            <form action="" className="flex flex-col gap-3">
                <strong className="self-center text-2xl">SignUp</strong>
                <label htmlFor="email" className="mt-10">Email</label>
                <input required type="email" name="email" id="" className="border border-gray-300 p-4 rounded-lg text-gray-600" placeholder="example@gmail.com" />
                <label htmlFor="password">Password</label>
                <input required type="password" name="password" id="" className="border border-gray-300 p-4 rounded-lg text-gray-600" />
                <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 cursor-pointer">Sign Up</button>
                 <p className="self-center text-gray-500">_________________ OR  _________________</p>

            </form>
                 <button onClick={()=>{
                    signInWithFacebook()
                 }} className="bg-blue-400 flex gap-3 items-center justify-center p-4 rounded-lg text-white cursor-pointer hover:bg-blue-500"><FaFacebook className="text-xl"/>Login with Facebook</button>
                 <button onClick={()=>{
                    signInWithGoogle()
                 }} className="bg-gray-500 flex gap-3 items-center justify-center p-4 rounded-lg text-white cursor-pointer hover:bg-gray-600"><FaGoogle className="text-xl"/>Login with Google</button>


        </div>
        </div>
    )
}
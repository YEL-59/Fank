import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../contexts/AuthProvider'
const Signup = () => {

    const {register,handleSubmit ,formState:{errors}}=useForm()
    const{createUser}=useContext(AuthContext)
    const handleSignUp=data=>{
        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
            const user= result.user
            console.log(user)
        })
        .catch(error=>console.log(error))
       // console.log(errors)
    }
  return (
    <div>
        <div>
      <div className="h-[800px]  flex justify-center items-start">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center">SignIn</h2>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            // onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
               {...register("name",{ required: "Name is required" } )}
                placeholder="First name"
                className="input input-bordered w-full max-w-xs"
              />
             {errors.name && <p className='text-red-700'>{errors.name.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
               {...register("email", {required:true})}
                placeholder="First name"
                className="input input-bordered w-full max-w-xs"
              />
             
            </div>
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">password</span>
              </label>
              <input
                type="password"
               {...register("password" ,{required:true,message:"password must be 4 digit and 1 number",minLength:{value:6,message:"try 6 digits"}})}
                placeholder="First name"
                className="input input-bordered w-full max-w-xs "
              />
              
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            {/* <p>{data}</p> */}
            <input
              className="btn btn-accent w-full mt-5"
              value="Login"
              type="submit"
            />
          </form>
          <p className="text-xs mt-2">
            *New To Doc_portal{" "}
            <Link className="text-success hover:border-b" to="/login">
              Already have an Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
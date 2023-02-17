import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, formState:{errors}, handleSubmit } = useForm();
  // const [data, setData] = useState("");
  const handleLogin = (data) => {
    console.log(data)
    //console.log(errors)
  };
  return (
    <div>
      <div className="h-[800px]  flex justify-center items-start">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center">Login</h2>
          <form
            onSubmit={handleSubmit(handleLogin)}
            // onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", { required: "email is required" })}
                placeholder="First name"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && <p role="alert">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: "password is required" }, { min: 4, max: 99 })}
                placeholder="First name"
                className="input input-bordered w-full max-w-xs"
              />
               {errors.password && <p role="alert">{errors.password?.message}</p>}
              <label className="label">
                <span className="label-text">Forget password ?</span>
              </label>
            </div>

            {/* <p>{data}</p> */}
            <input
              className="btn btn-accent w-full"
              value="Login"
              type="submit"
            />
          </form>
          <p className="text-xs mt-2">
            *New To Doc_portal{" "}
            <Link className="text-success hover:border-b" to="/signup">
              Create new Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

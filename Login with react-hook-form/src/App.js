import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rememberme: false,
      username: "your name",
      email: "sample@gmail.com",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset({
      rememberme: true,
      username: "Alex",
      email: "alex@example.com",
      password: "Test@123",
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>UserName</label>
          <input
            type="text"
            name="username"
            {...register("username", {
              required: "UserName is required",
              validate: {
                checkLength: (value) => value.length >= 4,
                matchPattern: (value) => /^[a-z]{4,}$/i.test(value),
              },
            })}
          />
          {errors.username?.type === "checkLength" && (
            <p className="errorMsg">UserName should be at-least 4 characters</p>
          )}
          {errors.username?.type === "matchPattern" && (
            <p className="errorMsg">UserName is not valid</p>
          )}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
          {/* {console.log({ ...register("password") })} */}
          {console.log(errors)}
        </div>
        <div className="check-control">
          <input
            type="checkbox"
            name="rememberme"
            {...register("rememberme")}
          />
          <label>Remember me</label>
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

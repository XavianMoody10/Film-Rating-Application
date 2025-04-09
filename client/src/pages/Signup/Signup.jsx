import React, { useState } from "react";
import { Main } from "../../layouts/Main/Main";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../../services/auth.services";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const mutation = useMutation({
    mutationFn: () => userSignup(username, password, email),
    onError: (error, variables, context) => {
      setErrorMessage(error.message);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  async function onSubmit(e) {
    e.preventDefault();
    mutation.mutate();
  }

  return (
    <Main>
      <section className=" h-screen flex items-center justify-center w-full">
        <form
          className=" flex flex-col w-full max-w-[400px] space-y-3"
          onSubmit={onSubmit}
        >
          {errorMessage && (
            <div className=" flex items-center justify-center gap-2">
              <ErrorOutlineOutlinedIcon sx={{ color: "red", fontSize: 40 }} />
              <p className=" text-red-500 text-lg font-medium">
                {errorMessage}
              </p>
            </div>
          )}

          <input
            type="text"
            placeholder="Email"
            className=" w-full bg-white text-lg px-2 py-3 rounded-sm"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            className=" w-full bg-white text-lg px-2 py-3 rounded-sm"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className=" w-full bg-white text-lg px-2 py-3 rounded-sm"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className=" border py-3 text-white font-medium text-lg rounded-sm hover:bg-black hover:border-black duration-150">
            Create Account
          </button>

          <Link to={"/login"} className=" text-white text-center font-medium">
            Already a member?
          </Link>
        </form>
      </section>
    </Main>
  );
};

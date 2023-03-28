import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import useSignup from "@/hooks/useSignup";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { isLoading, error, signup } = useSignup();

  async function submitHandler(e) {
    e.preventDefault();
    await signup(email, password);
  }

  return (
    <>
      <Navbar />

      <main>
        <form className='bg-white rounded-md shadow-xl w-96 mx-auto px-4 mt-52 py-5'>
          <h2 className='text-4xl font-medium pb-10 pt-5 text-gray-800'>
            Sign up
          </h2>
          <label htmlFor='text' className='block'>
            Email
          </label>
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type={"email"}
            name={"email"}
            required
            className='rounded-sm border-2 border-gray-200 w-full h-9 py-1 px-2 my-2'
          ></input>
          <div></div>
          <label htmlFor='password' className='block'>
            Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type={"password"}
            name={"password"}
            required
            className='rounded-sm border-2 border-gray-200 w-full h-9 py-1 px-2 my-2'
          ></input>
          <div></div>
          <button
            onClick={submitHandler}
            className='mt-10 rounded-lg bg-green-900 uppercase w-full py-3 text-white font-medium hover:bg-green-800'
            disabled={isLoading}
          >
            SIGN UP
          </button>
        </form>
        {error && (
          <div className='w-96 mx-auto bg-red-300 p-4 my-4 rounded-lg'>
            {error}
          </div>
        )}
      </main>
    </>
  );
};

export default Signup;

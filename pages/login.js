import React, { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { signIn } from "../actions/user";
import { connect } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const loginUser = (e) => {
    e.preventDefault();
    try {
      signIn(email, password);
      router.push("/");
      toast.success("Welcome Back!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Layout>
      <div className="Login min-h-full font-asap flex flex-col justify-center py-28 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mt-6 text-center font-medium text-5xl text-gray-900">
            Sign In
          </h1>
        </div>

        <div className="mt-8 px-8 sm:px-0 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={(e) => loginUser(e)} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg md:text-xl font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg md:text-xl"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg md:text-xl font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded text-lg"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-lg text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-lg">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>

              <h2 className="flex justify-center text-xl">
                Not a member?{" "}
                <Link href="/register">
                  <span className="font-semibold cursor-pointer ml-1">
                    Sign Up
                  </span>
                </Link>
              </h2>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default connect(null, { signIn })(Login);

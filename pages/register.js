import React, { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { connect } from "react-redux";
import { register } from "../actions/user";
import { useRouter } from "next/dist/client/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = ({ register }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const registerUser = (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        toast.error("Passwords don't match!");
      } else {
        register(name, email, password);
        router.push("/");
        toast.success(`Welcome to FureverPets ${name}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Layout>
      <div className="Login min-h-full font-asap flex flex-col justify-center py-28 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mt-6 text-center font-medium text-5xl text-gray-900">
            Sign Up
          </h1>
        </div>

        <div className="mt-8 px-8 sm:px-0 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={(e) => registerUser(e)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg md:text-xl font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                  />
                </div>
              </div>

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
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    placeholder="Email Address"
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
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-lg md:text-xl font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              </div>

              <h2 className="flex justify-center text-xl">
                Already a member?{" "}
                <Link href="/login">
                  <span className="font-semibold cursor-pointer ml-1">
                    Sign In
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

export default connect(null, { register })(Register);

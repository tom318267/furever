import React from "react";
import Layout from "../components/Layout";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div className="Contact flex justify-center items-center w-screen py-28 font-asap">
        <div className="bg-white contact-container w-4/5 h-full rounded-md mx-auto">
          <div className="flex w-full">
            <div className="w-full p-8 flex flex-col justify-center">
              <h1 className="font-asap text-4xl md:text-5xl font-medium mb-2">
                Contact Us
              </h1>
              <p className="mb-[28px] text-xl md:text-2xl">
                If you have any questions, please let us know!
              </p>
              <input
                className="border text-lg md:text-xl  p-2 mb-[28px]"
                type="text"
                placeholder="Name"
              />
              <input
                className="border text-lg md:text-xl p-2 mb-[28px]"
                type="text"
                placeholder="Email"
              />
              <textarea
                className="border pt-2 pl-2 text-lg md:text-xl"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="bg-purple-500 h-[62px] flex justify-center items-center gap-2 mt-[28px] text-xl md:text-2xl text-white font-medium hover:shadow-xl active:scale-90 transition duration-150">
                Send Message
                <span>
                  <FaPaperPlane className="text-xl md:text-2xl" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

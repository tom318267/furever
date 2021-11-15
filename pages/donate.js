import React from "react";
import Layout from "../components/Layout";

const Donate = () => {
  return (
    <Layout>
      <div className="Donate w-screen h-full font-asap">
        <div className="flex flex-col justify-center items-center mx-auto py-40 w-[379px]">
          <h1 className="text-[52px] text-white font-medium">Donate</h1>
          <img className="w-[80%]" src="/images/guy.png" alt="" />
          <p className="text-xl text-center mt-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            donec lobortis non ornare sit venenatis massa sit cras. Venenatis
            augue gravida cras elementum elementum platea sed.
          </p>
          <button className="px-8 py-2 bg-purple-500 w-full text-white text-lg font-semibold rounded-md mt-[15px]">
            Donate Now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;

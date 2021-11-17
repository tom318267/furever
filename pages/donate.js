import React from "react";
import Layout from "../components/Layout";

const Donate = () => {
  return (
    <Layout>
      <div className="Donate w-screen h-full font-asap">
        <div className="flex flex-col md:gap-6 justify-center mx-auto py-40 w-[80%] md:w-[750px] lg:w-[800px]">
          <div>
            <img
              className="w-full md:h-[400px] object-cover mx-auto mb-8 md:mb-0 rounded-md"
              src="/images/guydog.jpeg"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-[40px] md:text-[53px] text-black font-medium">
              Donate
            </h1>
            <p className="text-xl md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse donec lobortis non ornare sit venenatis massa sit
              cras. Venenatis augue gravida cras elementum elementum platea sed.
            </p>
            <button className="px-8 py-2 bg-purple-500 w-full text-white text-xl md:text-2xl font-semibold rounded-md mt-[15px] hover:shadow-xl active:scale-90 transition duration-150">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;

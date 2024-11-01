import React from "react";
import LoginForm from "../Auth/Login/LoginForm";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      {/* <Banner/>
      <LoginForm/> */}

      <section className="bg-gray-100 dark:bg-gray-900 ">
        <div className="py-8 px-4 mt-10 mx-auto  max-w-screen-xl lg:py-16">
          <div className="bg-[url('./homebk.jpg')] border border-gray-200 dark:border-gray-700 rounded-lg p-10 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Banner />
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

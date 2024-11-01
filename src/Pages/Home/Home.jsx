import React from "react";
import LoginForm from "../Auth/Login/LoginForm";
import Banner from "../../Components/Banner";
import { HorizontalLine } from "../../Components/HorizontalLine";

const Home = () => {
  return (
    <>
      {/* <Banner/>
      <LoginForm/> */}

      <section className="bg-gray-100 dark:bg-gray-900 h-screen">
        <div className="mt-10 mx-auto lg:py-16 h-full">
          <div
            className="bg-cover bg-center border border-gray-200 dark:border-gray-700 rounded-lg p-10 "
            style={{ backgroundImage: "url('./homebk.jpg') ", height: "70%" }}
          >
            <div
              className="grid md:grid-cols-2 gap-4"
              style={{ marginTop: "5%" }}
            >
              <Banner />
              <LoginForm />
            </div>
          </div>
          <HorizontalLine/>
        </div>
   
      </section>
    </>
  );
};

export default Home;

import React from "react";
import LoginForm from "../Auth/Login/LoginForm";
import Banner from "../../Components/Banner";
import { HorizontalLine } from "../../Components/HorizontalLine";

const Home = () => {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900 ">
        <div className="mt-10 mx-auto lg:py-16 h-full ">
          <div className="rounded-lg p-10 bg-[url('./homebk.jpg')] bg-contain">
            <div className="grid md:grid-cols-2 gap-4 justify-center">
              <Banner />
              <LoginForm />
            </div>
          </div>
          <div className="w-full "><HorizontalLine/></div>
          
        </div>
      </section>
    </>
  );
};

export default Home;

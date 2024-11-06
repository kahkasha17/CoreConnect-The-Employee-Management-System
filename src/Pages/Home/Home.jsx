import React from "react";
import LoginForm from "../Auth/Login/LoginForm";
import Banner from "../../Components/Banner";

const Home = () => {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900 ">
        <div className="mt-10 mx-auto lg:py-16 h-full ">
          <div className="rounded-lg p-10 bg-[url('./homebg.avif')] bg-cover bg-no-repeat">
            <div className="grid md:grid-cols-2 gap-4 justify-center">
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

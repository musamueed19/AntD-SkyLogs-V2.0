import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-loginBg">
      <div className="px-6 md:px-8 w-full h-full sm:h-fit max-w-lg py-12 rounded-lg border-gray-200 shadow-md border bg-loginFormBg">
        <div className="flex justify-center flex-col w-full">
          {/* Logo */}
          <div className="flex items-center justify-center w-full">
            <Logo src={"/images/fullLogoBlue.svg"} size={200} />
          </div>

          <h1 className="text-center my-4 font-semibold text-3xl">Login</h1>
          <div className="mt-2 mb-6 text-white bg-logoBlue text-sm p-3 rounded-md">
            <p>Welcome Back! We are pleased to see you back.</p>
            <p>Please enter your credentials.</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="grid justify-center content-center h-screen">
      <Image
        src={
          "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
        }
        width={200}
        height={200}
        alt="Facebook logo"
        className="object-contain"
      />
      <h1
        onClick={signIn}
        className="p-5 mt-10 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

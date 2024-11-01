"use client";

import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import Button from "../../../Components/Buttons";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    
    e.preventDefault();
    console.log("your email is", email)
    setEmail("")
    setPassword("")
  };
  return (
    <Card className="max-w-lg">
      <h1 className="text-red-500 font-bold">LOGIN TO YOUR ACCOUNT</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@galaxy.com"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)

            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required autoComplete="current-password"  value={password}
            onChange={(e) => {
              setPassword(e.target.value)}} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" required />
          <Label htmlFor="remember">Remember me</Label>
          <a href="#" className="ml-auto text-blue-600 font-medium">
            Forget Password?
          </a>
        </div>

        <Button name="Submit" type="Submit" />
      </form>
    </Card>
  );
};

export default LoginForm;

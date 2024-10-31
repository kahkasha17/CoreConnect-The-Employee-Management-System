"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

const LoginForm = () => {
  return (
    <Card className="max-w-sm">
      <h1 className="text-red-500 font-bold">LOGIN TO YOUR ACCOUNT</h1>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@galaxy.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
          <a href="#" className="ml-auto text-blue-600 font-medium">
            Forget Password?
          </a>
        </div>

        <Button gradientMonochrome="cyan">Submit</Button>

      </form>
    </Card>
  );
};

export default LoginForm;

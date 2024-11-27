import React from "react";
import Form from "./Form";
import SignUp from "./SignUp";

export default function SignUpPage() {
  return (
    <Form 
      title="Sign Up" 
      subTitle="Please fill the details to create an account" 
      component={<SignUp />} 
    />
  );
}

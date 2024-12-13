import React from "react";
import { Form, SignUp } from "../imports/componentsImports";

export default function SignUpPage() {
  return (
    <Form 
      title="Sign Up" 
      subTitle="Please fill the details to create an account" 
      component={<SignUp />} 
    />
  );
}

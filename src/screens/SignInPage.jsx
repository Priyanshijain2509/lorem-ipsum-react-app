import React from "react";
import { Form, SignIn } from "../imports/componentsImports";

export default function SignInPage() {
  return (
    <Form 
      title="Sign In" 
      subTitle="Please fill the details to log in to your account." 
      component={<SignIn />} 
    />
  )
}

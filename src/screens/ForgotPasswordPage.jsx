import React from "react";
import { Form, ForgotPassword } from "../imports/componentsImports";

export default function ForgotPasswordPage() {
  return (
    <Form 
      title="Forget Password" 
      subTitle="Please fill the details to reset your password." 
      component={<ForgotPassword />}
    />
  );
}
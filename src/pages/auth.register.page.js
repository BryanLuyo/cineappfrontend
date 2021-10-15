import React from "react";
import { FormRegister } from "../components/auth/FormRegister";
import { Footer } from "../components/ui/footer";

export const RegisterPage = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-8">
            <div className="bg__login"></div>
          </div>
          <div className="col-lg-4">
            <div className="auth__main d-flex align-items-center">
                <FormRegister/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

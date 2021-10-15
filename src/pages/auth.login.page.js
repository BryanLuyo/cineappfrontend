import React from "react";
import { FormLogin } from "../components/auth/FormLogin";
import { Footer } from "../components/ui/footer";

export const LoginPage = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-8">
            <div className="bg__login"></div>
          </div>
          <div className="col-lg-4">
            <div className="auth__main d-flex align-items-center">
                <FormLogin/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

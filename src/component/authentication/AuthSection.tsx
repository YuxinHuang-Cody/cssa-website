import React from 'react'
import LoginForm from '../form/LoginForm'
import RegisterForm from '../form/RegisterForm';
interface AuthProps {
  login: boolean;
}
const AuthSection:React.FC<AuthProps>= ({login}) => {
  return (
    <section className="tl-account-form-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 auth-container">
                    <h3 className="single-form-title">{login? 'Log in':'Register'}</h3>
                    {login? (
                      <LoginForm/>
                    ) : (
                      <RegisterForm/>
                    )}
                    <div className="other-option">
                      <p>Or continue with</p>
                    <div className="social-box d-flex justify-content-center gap-20">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-google"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AuthSection
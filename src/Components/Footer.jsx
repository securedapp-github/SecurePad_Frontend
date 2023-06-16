import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <div className="footer">
      <footer className="w-100 py-4 flex-shrink-0 bg-black">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-3 col-md-6">
              <img src={Logo} alt="not found" width={300} height={80} />
              <p className="small text-muted">
              Secure Your Smart Contracts with SecureDapp
              </p>
              <p className="small text-muted">
               Trusted Smart Contract Audit Firm
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="h1 text-dark">Company</h5>
              <ul className="small text-muted">
                <li>
                  <a href="https://securedapp.in/team/">Team</a>
                </li>
                <li>
                  <a href="https://securedapp.in/about-us/">About Us</a>
                </li>
                <li>
                  <a href="https://securedapp.in/contact-us/">Request a quote</a>
                </li>
                <li>
                  <a href="https://securedapp.in/referral-sign-up-for-our-referral-program-today/">Referral</a>
                </li>
                <li>
                  <a href="https://securedapp.in/career/">Career</a>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <h5 className="h1 text-dark">Resource</h5>
              <ul className="small text-muted">
                <li>
                  <a href="https://securedapp.in/career/">Audit Process</a>
                </li>
                <li>
                  <a href="https://securedapp.in/career/">Our Services</a>
                </li>
                <li>
                  <a href="https://securedapp.in/privacy-policy/">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://securedapp.in/privacy-policy/">Workplace Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="h1 text-dark">Company</h5>
              <p className="small text-muted">
                #235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar 2nd Stage,
                Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <p className="text-center small text-muted">
                Secure Your Smart Contracts with SecureDapp – Trusted Smart
                Contract Audit Firm
              </p>
              <p className="text-center small text-muted">
                Join @secureDApp
              </p>
              <p className="text-center small text-muted">
                Powered by Vettedcode Technologies India Private Limited
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Logo from "../assets/logo.jpeg";

// function Footer() {
//   return (
//     <div className="footer">
//       <footer className="w-100 py-4 flex-shrink-0 bg-black">
//         <div className="container py-4">
//           <div className="row gy-4 gx-5">
//             <div className="col-lg-3 col-md-6">
//               <img src={Logo} alt="not found" width={300} height={80} />
//               <p className="small text-muted">
//               Secure Your Smart Contracts with SecureDapp
//               </p>
//               <p className="small text-muted">
//                Trusted Smart Contract Audit Firm
//               </p>
//             </div>

//             <div className="col-lg-3 col-md-6">
//               <h5 className="h1 text-dark">Company</h5>
//               <ul className="small text-muted">
//                 <li>
//                   <a href="https://securedapp.in/team/">Team</a>
//                 </li>
//                 <li>
//                   <a href="https://securedapp.in/about-us/">About Us</a>
//                 </li>
//                 <li>
//                   <a href="https://securedapp.in/contact-us/">Request a quote</a>
//                 </li>
//                 <li>
//                   <a href="https://securedapp.in/referral-sign-up-for-our-referral-program-today/">Referral</a>
//                 </li>
//                 <li>
//                   <a href="https://securedapp.in/career/">Career</a>
//                 </li>
//               </ul>
//             </div>
            
//             <div className="col-lg-3 col-md-6">
//               <h5 className="h1 text-dark">Resource</h5>
//               <ul className="small text-muted">
//                 <li>
//                   <a href="https://securedapp.in/career/">Audit Process</a>
//                 </li>
//                 <li>
//                   <a href="https://securedapp.in/career/">Our Services</a>
//                 </li>
//                 <li>
//                   <a href="https://securedapp.in/privacy-policy/">Privacy Policy</a>
//                 </li>
//                 <li>
//                   <a href="https://securedapp.in/privacy-policy/">Workplace Policy</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <h5 className="h1 text-dark">Company</h5>
//               <p className="small text-muted">
//                 #235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar 2nd Stage,
//                 Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038
//               </p>
//             </div>
//           </div>
//           <div className="row mt-4">
//             <div className="col-lg-12">
//               <p className="text-center small text-muted">
//                 Secure Your Smart Contracts with SecureDapp – Trusted Smart
//                 Contract Audit Firm
//               </p>
//               <p className="text-center small text-muted">
//                 Join @secureDApp
//               </p>
//               <p className="text-center small text-muted">
//                 Powered by Vettedcode Technologies India Private Limited
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;

import React from "react";
import Logo from "../assets/logo.jpeg";
import '../Style/footer.css';

function Footer() {
  return (
<footer>
  <div class="footer-content">
    <div class="footer-column">
      <img src={Logo} alt="not found" width={300} height={69} />
      <p>
        Secure Your Smart Contracts with 
        SecureDapp Trusted Smart 
        Contract Audit Firm
      </p>
    </div>
    <div class="footer-column">
      <h4>Company</h4>
      <ul>
        <li><a href="#">Team</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Request a quote</a></li>
        <li><a href="#">Referral</a></li>
        <li><a href="#">Career</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>Resource</h4>
      <ul>
        <li><a href="#">Solidity Shield</a></li>
        <li><a href="#">Audit Process</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Workplace Policy</a></li>
        <li><a href="#">Our Mission & Core values</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>Contact</h4>
      <p>#235, 2nd & 3rd Floor, 13th Cross Rd,<br/>
      Indira Nagar 2nd Stage, Hoysala<br/>
      Nagar, Indiranagar, Bengaluru,<br/>
      Karnataka 560038</p>
      <div class="footer-column">
        <ul class="social-icons">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100089830892409" target="_blank" class="a-facebook" rel="noopener">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/securedapp/" target="_blank" class="a-linkedin" rel="noopener">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/securedapp_official?igshid=ZDdkNTZiNTM=" target="_blank" class="a-instagram" rel="noopener">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-column">
        <ul class="social-telegram">
          <li>
            <div class="wp-block-wptelegram-widget-join-channel aligncenter">
              <a href="https://t.me/secureDApp" class="components-button join-link is-large has-text has-icon" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-telegram"></i>  Join @secureDApp
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Powered by Vettedcode Technologies India Private Limited</p>
  </div>
</footer>
  );
}

export default Footer;

import "../style/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-1">
          <div>
            <img src="./assets/images/Logo.svg" alt="" />
          </div>
          <div className="sec-4">
            <img src="./assets/images/i.fi-social-twitter.svg" alt="" />
            <img src="./assets/images/svg.feather.svg" alt="" />
            <img src="./assets/images/i.fi-social-linkedin.svg" alt="" />
            <img src="./assets/images/i.fi-social-facebook.svg" alt="" />
          </div>
        </div>
        <div className="footer-2">
          <div className="sec-5">
            <div className="footer-sec">
              <h6>Why Scissor ?</h6>
              <div>
                <p>Scissor 101 </p>
                <p>Integrations & API</p>
                <p>Pricing</p>
              </div>
            </div>
            <div className="footer-sec">
              <h6>Resources</h6>
              <div>
                <p>Blog</p>
                <p>Resource Library</p>
                <p>Developers</p>
                <p>App Connectors</p>
                <p>Support</p>
                <p>Trust Center</p>
                <p>Browser Extension</p>
                <p>Mobile App</p>
              </div>
            </div>
          </div>
          <div className="sec-6">
            <div className="footer-sec">
              <h6>Solutions</h6>
              <div>
                <p>Social Media</p>
                <p>Digital Marketing</p>
                <p>Customer Service</p>
                <p>For Developers</p>
              </div>
            </div>
            <div className="footer-sec">
              <h6>Features</h6>
              <div>
                <p>Branded Links</p>
                <p>Mobile Links</p>
                <p>Campaign</p>
                <p>Management & Analytics</p>
                <p>QR Code generation</p>
              </div>
            </div>
          </div>
          <div className="sec-7">
            <div className="footer-sec">
              <h6>Products</h6>
              <div>
                <p>Link Management</p>
                <p>QR Codes</p>
                <p>Link-in-bio</p>
              </div>
            </div>
            <div className="footer-sec">
              <h6>Legal</h6>
              <div>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Terms of Service</p>
                <p>Acceptable Use Policy</p>
                <p>Code of Conduct</p>
              </div>
            </div>
          </div>
          <div>
            <div className="footer-sec">
              <h6>Company</h6>
              <div>
                <p>About Scissor</p>
                <p>Careers</p>
                <p>Partners</p>
                <p>Press</p>
                <p>Contact</p>
                <p>Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-3">
        <div>
          <p>Term of Service</p>
          <p className="vector5"></p>
          <p>Security</p>
          <p className="vector5"></p>
          <p>ⓒ Scissor 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

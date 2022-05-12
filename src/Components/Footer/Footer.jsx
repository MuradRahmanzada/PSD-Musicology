import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Instagram } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <h1>Subscribe</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, vero?
        </p>
        <div className="input_div">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="musicolcgy">
          <h1>Musicology</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            atque natus cum ipsa labore aliquam.
          </p>
          <div className="icons">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <WhatsAppIcon />
          </div>
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="#" className="active">
                About
              </a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Brand Guidelines</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="#" className="active">
                Services
              </a>
            </li>
            <li>
              <a href="#">How to Order</a>
            </li>
            <li>
              <a href="#">Our Product</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Promo</a>
            </li>
            <li>
              <a href="#">Payment Method</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <ul className="ul-right">
            <li>
              <a href="#" className="active">
                Other
              </a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

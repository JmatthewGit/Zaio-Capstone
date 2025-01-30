import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_info">
        <div className="footer_info_support">
          <h5>Support</h5>
          <p>Help center</p>
          <p>Safety information</p>
          <p>Cancellation options</p>
          <p>Our COVID-19 response</p>
          <p>Supporting people with disabilities</p>
          <p>Report a neighborhood concern</p>
        </div>
        <div className="footer_info_community">
          <h5>Community</h5>
          <p>Airbnb.org: disaster relief housing</p>
          <p>Support: Afghan refugees</p>
          <p>Celebrating diversity & belonging</p>
          <p>Combating discrimination</p>
        </div>
        <div className="footer_info_hosting">
          <h5>Hosting</h5>
          <p>Try hosting</p>
          <p>AirCover: protection for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>
        <div className="footer_info_about">
          <h5>About</h5>
          <p>Newsroom</p>
          <p>Learn about new features</p>
          <p>Letter from our founders</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Airbnb Luxe</p>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_left">
          <p>&copy; 2024 Airbnb Clone, Inc.  Privacy . Terms . Sitemap</p>
        </div>
        <div className="footer_bottom_right">
          <LanguageIcon />
          <p>English (US)</p>
          <AttachMoneyIcon />
          <p>USD</p>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  )
}

export default Footer;

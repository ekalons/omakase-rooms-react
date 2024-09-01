import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>omakaserooms © {currentYear} - All rights reserved</p>
    </footer>
  );
};

export default Footer;

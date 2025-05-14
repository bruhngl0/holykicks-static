import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-logo">
        <img src="logo.png" />
      </div>
      <div className="contact-wings">
        <div className="wing-one">
          <img src="wing2.png" />
        </div>
        <div className="wing-two">
          <img src="wing1.png" />
        </div>
      </div>
      <div className="contact-content">
        <img src="content.png" />
      </div>
      <div className="contact-socials">
        <div className="contact-socials-gmail">
          <p>Holykicks@gmail.com</p>
        </div>

        <div className="contact-socials-icons">
          <div className="social-one">
            <img src="Instagram.png" />
          </div>

          <div className="social-two">
            <img src="Linkedin.png" />
          </div>
          <div className="social-three">
            <img src="Whatsapp.png" />
          </div>
          <div className="social-four">
            <img src="Twitter.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

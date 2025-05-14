import "../styles/about.scss";
const About = () => {
  return (
    <div className="about-main">
      <div className="about-logo">
        <img src="logo.png" />
      </div>

      <div className="about-shoe">
        <div className="about-shoe-text">
          <p>ABOUT</p>
        </div>
        <div className="about-shoe-img">
          <img src="aboutShoe.png" />
        </div>
        <div className="about-clouds">
          <div className="about-cloudOne">
            <img src="cloudOne.png" />
          </div>
          <div className="about-cloudTwo">
            <img src="cloudOne.png" />
          </div>
          <div className="about-cloudThree">
            <img src="cloudOne.png" />
          </div>
        </div>
      </div>

      <div className="about-description">
        <p>
          At Holy Kicks, we offer expert shoe cleaning and restoration to keep
          your footwear looking its best. Whether it's your favorite sneakers or
          high-end designer shoes, we use eco-friendly products to restore,
          refresh, and maintain their quality. With a passion for footwear care,
          we’re dedicated to giving your kicks a second life, so they always
          feel as fresh as the day you got them.
        </p>
      </div>
    </div>
  );
};

export default About;

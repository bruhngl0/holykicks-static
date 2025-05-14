import "../styles/services.scss";

const Services = () => {
  return (
    <div className="services-main">
      <div className="services-logo">
        <img src="logo.png" />
      </div>

      <div className="services-text">
        <p>BASIC CLEANING SINGLE PAIR</p>
        <p>DEEP CLEANING SINGLE PAIR</p>
        <p>GROUP DEEP CLEANING</p>
      </div>

      <div className="services-content">
        <div className="services-content-text">
          <p>SERVICES</p>
        </div>
        <div className="services-content-shoe">
          <img src="serv.png" />
        </div>
        <div className="services-content-clouds">
          <div className="services-cloud-one">
            <img src="cloudOne.png" />
          </div>
          <div className="services-cloud-two">
            <img src="cloudOne.png" />
          </div>
          <div className="services-cloud-three">
            <img src="cloudOne.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

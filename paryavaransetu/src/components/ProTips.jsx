import NavBar from "./navbar";

const ProTips = () => {
  return (
    <div className="router-components">
      <div className="inner-nav-bar">
        <NavBar />
      </div>
      <div className="router-component-content">
        <h1>Pro Tips</h1>
        <p>
          Welcome to our Pro Tips section, where we share valuable insights and
          recommendations for maintaining and improving air and water quality in
          your environment. Whether you're an individual looking to make a
          difference or a professional in the field, you'll find useful
          information here.
        </p>
        <h3>Tips for Better Air Quality</h3>
        <ul>
          <li>
            Regularly change the filters in your HVAC system to ensure clean
            indoor air.
          </li>
          <li>
            Use air purifiers with HEPA filters to remove allergens and
            pollutants from your home.
          </li>
          <li>
            Reduce indoor smoking to minimize the introduction of harmful
            pollutants into your living spaces.
          </li>
          <li>
            Keep indoor plants to naturally purify the air and add oxygen to
            your environment.
          </li>
        </ul>
        <h3>Tips for Cleaner Water</h3>
        <ul>
          <li>
            Install a water filter to remove impurities and contaminants from
            your tap water.
          </li>
          <li>
            Conserve water by fixing leaks and using water-saving fixtures and
            appliances.
          </li>
          <li>
            Avoid the use of harmful chemicals in your garden that can
            contaminate groundwater.
          </li>
          <li>
            Regularly test your well water if you have a private well to ensure
            its safety.
          </li>
        </ul>
        <p>
          Our goal is to empower you with the knowledge you need to make a
          positive impact on air and water quality. If you have any specific
          questions or topics you'd like us to cover, please{" "}
          <a href="/contact">get in touch</a> with us.
        </p>
      </div>
    </div>
  );
};

export default ProTips;

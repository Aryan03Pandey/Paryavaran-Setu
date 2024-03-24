import NavBar from "./navbar";

const Contribute = () => {
  return (
    <div className="router-components">
      <div className="inner-nav-bar">
        <NavBar />
      </div>
      <div className="router-component-content">
        <h1>Contribute</h1>
        <p>
          Thank you for your interest in contributing to our mission of
          monitoring and improving air and water quality. Your support and
          involvement can make a significant difference in creating a cleaner
          and safer environment for all.
        </p>
        <h3>Ways to Contribute</h3>
        <p>There are several ways you can contribute to our cause:</p>
        <ul>
          <li>
            Donate: Your financial support helps fund research and technology
            development.
          </li>
          <li>
            Volunteer: Join our team and participate in hands-on environmental
            projects and data collection.
          </li>
          <li>
            Spread Awareness: Share our mission on social media and raise
            awareness about air and water quality issues.
          </li>
          <li>
            Collaborate: If you represent an organization, explore partnership
            opportunities with us.
          </li>
        </ul>
        <p>
          No matter how you choose to contribute, your efforts are greatly
          appreciated and vital to our success. Together, we can make a positive
          impact on our environment.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you're interested in contributing or have specific questions about
          how you can get involved, please don't hesitate to{" "}
          <a href="/contact">contact us</a>. We'd be happy to discuss how you
          can be part of our mission.
        </p>
      </div>
    </div>
  );
};

export default Contribute;

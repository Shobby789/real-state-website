import "./GetStarted.css";

export default function GetStarted() {
  return (
    <section className="g-wrapper" id="getstarted">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:smshoaib2001@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}

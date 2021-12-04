import "../styles/style.css";
import logo from "../assets/images/logo.svg";
import mockups from "../assets/images/screen-mockups.svg";
import communities from "../assets/images/icon-communities.svg";
import messages from "../assets/images/icon-messages.svg";

import { Footer, SectionContact, SectionTogether } from "../components/index";

function App() {
  return (
    <>
      <header className="hero">
        <nav className="nav container">
          <div className="nav__logo">
            <img src={logo} className="nav__img" />
          </div>
          <div className="nav__links">
            <a href="#" className="nav__link">
              Try it free
            </a>
          </div>
        </nav>

        <section className="hero__main container">
          <div className="hero__texts">
            <h1 className="title">Build The Community Your Fans Will Love</h1>
            <p className="hero__paragraph">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <a href="#" className="cta">
              Get Started For Free
            </a>
          </div>

          <figure className="hero__figure">
            <img src={mockups} className="hero__img" />
          </figure>

          <section className="hero__cards">
            <div className="hero__card">
              <img src={communities} className="hero__icon" />
              <h3 className="hero__number">1.4K+</h3>
              <p className="hero__copy">Communities Formed</p>
            </div>

            <div className="hero__card">
              <img src={messages} className="hero__icon" />
              <h3 className="hero__number">2.7K+</h3>
              <p className="hero__copy">Messages Sent</p>
            </div>
          </section>

          <div className="wave"></div>
        </section>
      </header>
      <SectionTogether />
      <SectionContact />
      <Footer />
    </>
  );
}

export default App;

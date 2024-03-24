import "../style/herosection.css";
import vector from "../../assets/Vector.png";
import vector2 from "../../assets/Vector 2.png";
import vector3 from "../../assets/Vector 3.png";
import Scissors from "../../assets/SCISSOR.png";
import Start from "../../assets/start.svg";
import Link2 from "../../assets/link-2.svg";
import Line7 from "../../assets/Line 7.svg";

const HeroSection = () => {
  function slide(e: any) {
    if (e.target.previousElementSibling.style.display == "none") {
      e.target.previousElementSibling.style.display = "flex";
    } else {
      e.target.previousElementSibling.style.display = "none";
    }
  }

  return (
    <main>
      <header id="header">
        <div className="logo">
          <img src={vector} alt="" />
          <img src={vector2} alt="" />
          <img src={Scissors} alt="" />
        </div>
        <nav>
          <span>
            <a href="">My URLs</a>
          </span>
          <a href="#section2">Features</a>
          <a href="#desktop-1">Pricing</a>
          <a href="#desktop-2">Analytics</a>
          <a href="#FAQs">FAQs</a>
        </nav>
        <nav className="nav2">
          <span>
            <a href="">Log in</a>
          </span>
          <button>Try for Free</button>
        </nav>
      </header>
      <button id="sidebar" onClick={slide}>
        <img src={Start} alt="" />
      </button>
      <div className="maindiv">
        <div className="firstdiv">
          <h1>
            Optimize Your Online Experience with Our Advanced
           {" "} <span>URL Shortening</span> Solution
          </h1>
          <img src={vector3} alt="" />
        </div>

        <div className="Seconddiv">
          <p>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </div>

        <div className="thirddiv">
          <button>Sign Up</button>
          <span>
            <a href="">Learn More</a>
          </span>
        </div>
      </div>
      <div className="maindiv2">
        <div className="forthdiv">
          <span>
            <img src={Link2} alt="" />
            <img src={Link2} alt="" />
            <img src={Link2} alt="" />
            <img src={Line7} alt="" />
            <img src={Link2} alt="" />
          </span>
          <p>
            Seamlessly transform your long URLs into concise and{" "}
            <b>shareable links</b> with just few clicks.
          </p>
        </div>
        <div className="vector2"></div>
      </div>
      <div className="fifthdiv">
        <div className="vector3"></div>
      </div>
    </main>
  );
};

export default HeroSection;

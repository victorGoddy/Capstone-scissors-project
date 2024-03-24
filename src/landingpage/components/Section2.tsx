import "../style/section2.css";
import edit from "../../assets/edit.svg";
import url from "../../assets/url.svg";
import grid from "../../assets/grid.svg";
import activity from "../../assets/activity.svg";

const Section2 = () => {
  return (
    <article id="section2">
      <div className="Headsec">
        <div className="Headsecdiv">
          <h2>One Stop.</h2>
          <h2>
            <span> Four Possibilities.</span>
          </h2>
        </div>
        <div className="Frame1">
          <div className="Frame1-0">
            <div>
              <h2>3M</h2>
              <span>
                <p>Active users</p>
              </span>
            </div>
            <div>
              <h2>60M</h2>
              <span>
                <p>Links & QR codes created</p>
              </span>
            </div>
          </div>
          <div className="Frame1-0">
            <div>
              <h2>1B</h2>
              <span>
                <p>Clicked & Scanned connections</p>
              </span>
            </div>

            <div>
              <h2>300K</h2>
              <span>
                <p>App Integrations</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainsec">
        <div className="mainsec-1">
          <div className="mainsec-1-0">
            <code className="code"></code>
            <h3>
              Why choose <span>Scissors</span>
            </h3>
          </div>
          <span className="mainsec-1-1">
            <p>
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.
            </p>
          </span>
        </div>
        <div className="mainsec-2">
          <div className="one">
            <div className="mainsec-2-1">
              <div className="Ellipse">
                <img src={url} alt="" />
              </div>
              <div className="sec-2">
                <div>
                  <h4>URL Shortening</h4>
                </div>
                <p>
                  Scissor allows you to shorten URLs of your business,
                  events.Shorten your URL at scale, URL redirects.
                </p>
              </div>
            </div>
            <div className="mainsec-2-1">
              <div className="Ellipse">
                <img src={edit} alt="" />
              </div>
              <div className="sec-2">
                <div>
                  <h4>Custom URLs</h4>
                </div>
                <p>
                  With Scissor, you can create custom URLs, with the length you
                  want! A solution for socials and businesses.
                </p>
              </div>
            </div>
          </div>
          <div className="one">
            <div className="mainsec-2-1">
              <div className="Ellipse">
                <img src={grid} alt="" />
              </div>
              <div className="sec-2">
                <div>
                  <h4>QR Codes</h4>
                </div>
                <p>
                  Generate QR codes to your business, events. Bring your
                  audience and customers to your doorstep with this scan and go
                  solution.
                </p>
              </div>
            </div>
            <div className="mainsec-2-1">
              <div className="Ellipse">
                <img src={activity} alt="" />
              </div>
              <div className="sec-2">
                <div>
                  <h4>Data Analytics</h4>
                </div>
                <p>
                  Receive data on the usage of either your shortened URL, custom
                  URLs or generated QR codes. Embedded to monitor progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Section2;

import "../style/desktop1.css";
import checkCircle from  "../../assets/check-circle.svg"
import checkCirle2 from "../../assets/check-circle (1).svg"  

const Desktop1 = () => {
  return (
    <article id="desktop-1">
      <section className="top-1">
        <code className="code"></code>
        <div>
          <div>
            <h3>
              A <span>price perfect </span>for your needs.
            </h3>
          </div>
          <section>
            <p>
              From catering for your personal, business, event, socials needs,
              you can be rest assured we have you in mind in our pricing.
            </p>
          </section>
        </div>
      </section>

      <section className="top-2">
        <div id="desktop-10">
          <strong>
            <p>Basic</p>
          </strong>
          <div>
            <div className="frame9">
              <h4>Free</h4>
              <h5>Free plan for all users</h5>
            </div>
            <div className="frame10">
              <div>
                <img
                  src={checkCircle}
                  alt="check-circle"
                />
                <p>Unlimited URL Shortening</p>
              </div>
              <div>
                <img
                  src={checkCircle}
                  alt="check-circle"
                />
                <p>Basic Link Analytics</p>
              </div>
              <div>
                <img
                  src={checkCircle}
                  alt="check-circle"
                />
                <p>Customizable Short Links</p>
              </div>
              <div>
                <img
                  src={checkCircle}
                  alt="check-circle"
                />
                <p>Standard Support</p>
              </div>
              <div>
                <img
                  src={checkCircle}
                  alt="check-circle"
                />
                <p>Ad-supported</p>
              </div>
            </div>
          </div>
        </div>
        <div id="desktop-11">
          <strong>
            <p>Professional</p>
          </strong>

          <div>
            <div className="frame9">
              <h4>$15/month</h4>
              <h5>Ideal for business creators</h5>
            </div>
            <div className="frame10">
              <div>
                <img
                  src={checkCirle2}
                  alt="check-circle"
                />
                <p>Enhanced Link Analytics</p>
              </div>
              <div>
                <img
                  src={checkCirle2}
                  alt="check-circle"
                />
                <p>Custom Branded Domains</p>
              </div>
              <div>
                <img
                  src={checkCirle2}
                  alt="check-circle"
                />
                <p>Advanced Link Customization</p>
              </div>
              <div>
                <img
                  src={checkCirle2}
                  alt="check-circle"
                />
                <p>Priority Support</p>
              </div>
              <div>
                <img
                  src={checkCirle2}
                  alt="check-circle"
                />
                <p>Ad-free Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div id="desktop-12">
          <strong>
            <p>Teams</p>
          </strong>
          <div>
            <div className="frame9">
              <h4>$25/month</h4>
              <h5>Share with up to 10 users</h5>
            </div>
            <div className="frame10">
              <div>
                <img
                  src={checkCircle}
                  alt="check-circle"
                />
                <p>Team Collaboration</p>
              </div>
              <div>
                <img
                  src={checkCircle}
                  alt="check-circle"
                />
                <p>User Roles and Permissions</p>
              </div>
              <div>
                <img
                  src={checkCircle}
                  alt="check-circle"
                />
                <p>Enhanced Security</p>
              </div>
              <div>
                <img
                  src={checkCircle}
                  alt="check-circle"
                />
                <p>API Access</p>
              </div>
              <div>
                <img
                  src={checkCircle}
                  alt="check-circle"
                />
                <p>Dedicated Account Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-3">
        <div className="frame11">
          <button className="B2">Get Custom Pricing</button>
          <button>Select Pricing</button>
        </div>
      </section>
    </article>
  );
};

export default Desktop1;

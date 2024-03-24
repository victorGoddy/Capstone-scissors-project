import "../style/faq.css";

const Faq = () => {
  return (
    <article id="FAQs">
      <section className="frame13">
        <div className="sec3">
          <code className="code"></code> <h3>FAQs</h3>
        </div>
        <ul id="FAQ">
          <li>
            <label htmlFor="faq-first">
              How does URL shortening work?
              <div className="faq-icon"> +</div>
            </label>
            <input type="radio" id="faq-first" name="FAQ" checked />
            <div className="content">
              <p>
                {" "}
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </p>
            </div>
          </li>

          <li>
            <label htmlFor="faq-second">
              Is it necessary to create an account to use the URL shortening
              service?<div className="faq-icon">&minus;</div>
            </label>
            <input type="radio" id="faq-second" name="FAQ" />
            <div className="content">
              <p>
                {" "}
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </p>
            </div>
          </li>

          <li>
            <label htmlFor="faq-thrid">
              Are the shortened links permanent? Will they expire?
              <div className="faq-icon">&minus;</div>
            </label>
            <input type="radio" id="faq-thrid" name="FAQ" />
            <div className="content">
              <p>
                {" "}
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </p>
            </div>
          </li>

          <li>
            <label htmlFor="faq-forth">
              Are there any limitations on the number of URLs I can shorten?
              <div className="faq-icon">&minus;</div>
            </label>
            <input type="radio" id="faq-forth" name="FAQ" />
            <div className="content">
              <p>
                {" "}
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </p>
            </div>
          </li>

          <li>
            <label htmlFor="faq-fifth">
              Can I customize the shortened URLs to reflect my brand or content?
              <div className="faq-icon">&minus;</div>
            </label>
            <input type="radio" id="faq-fifth" name="FAQ" />
            <div className="content">
              <p>
                {" "}
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </p>
            </div>
          </li>

          <li>
            <label htmlFor="faq-sixth">
              Can I track the performance of my shortened URLs?
              <div className="faq-icon">&minus;</div>
            </label>
            <input type="radio" id="faq-sixth" name="FAQ" />
            <div className="content">
              <p>
                {" "}
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </p>
            </div>
          </li>

          <li>
            <label htmlFor="faq-seventh">
              How secure is the URL shortening service? Are the shortened links
              protected against spam or malicious activity?
              <div className="faq-icon">&minus;</div>
            </label>
            <input type="radio" id="faq-seventh" name="FAQ" />
            <div className="content">
              <p>
                {" "}
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </p>
            </div>
          </li>

          <li>
            <label htmlFor="faq-eighth">
              What is a QR code and what can it do?
              <div className="faq-icon">&minus;</div>
            </label>
            <input type="radio" id="faq-eighth" name="FAQ" />
            <div className="content">
              <p>
                {" "}
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </p>
            </div>
          </li>

          <li>
            <label htmlFor="faq-ninth">
              Is there an API available for integrating the URL shortening
              service into my own applications or websites?
              <div className="faq-icon">&minus;</div>
            </label>
            <input type="radio" id="faq-ninth" name="FAQ" />
            <div className="content">
              <p>
                {" "}
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Faq;

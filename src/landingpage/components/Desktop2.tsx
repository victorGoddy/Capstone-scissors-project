import "../style/desktop2.css";
import { useState } from "react";
import MagicWand from "../../assets/magic wand.svg";

const Desktop2 = () => {
  let [newlLink, setNewLink] = useState("");
  let [originalLink, setOriginalLink] = useState("");
  const [selectedOption, setSelectedOption] = useState("Selct an Option");

  const shortenUrl = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: `Bearer 87be3f2f418db02e18b428a89df47c7fcf30903d`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: originalLink }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      const { link } = data;
      originalLink = link;
      setOriginalLink(originalLink);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    switch (selectedValue) {
      case "Custom Domain":
        handleOption1();
        break;
      case "Random Domain":
        handleOption2();
        break;
      default:
        // Handle other options or do nothing
        break;
    }
  };

  const handleNewLink = (e: any) => {
    newlLink = e.target.value;
    setNewLink(newlLink);
  };

  const handleOption1 = () => {
    let option =
      document.getElementsByClassName("first")[0]?.nextElementSibling;

    if (option) {
      option.addEventListener("input", handleNewLink);
    }
  };

  const handleOption2 = () => {
    const inputElement =
      document.querySelector<HTMLInputElement>(".first")?.nextElementSibling;

    if (!inputElement) {
      console.error("Input element not found");
      return;
    }

    // Remove the event listener
    inputElement.removeEventListener("input", handleNewLink);
    newlLink = "";
    setNewLink(newlLink);
  };

  return (
    <article id="desktop-2">
      <form action="" onSubmit={shortenUrl}>
        <div className="three">
          <div>
            <input
              type="text"
              value={originalLink}
              placeholder="Paste you Url Here"
              size={1}
              onChange={(e: any) => setOriginalLink(e.target.value)}
            />
          </div>
          <div className="sss">
            <select
              className="first"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Select an option</option>
              <option value="Custom Domain">Choose Domain</option>
              <option value="Random Domain">Random Domain</option>
            </select>
            <input
              type="text"
              placeholder="Type Alias here"
              role=""
              value={newlLink}
            />
          </div>
        </div>
        <div className="four">
          <div className="magic-wand">
            <div>
              <button type="submit">Trim URL</button>
              <img src={MagicWand} alt="magic wand" />
            </div>
          </div>
          <div className="TC">
            <p>
              By clicking TrimURL, I agree to the Terms of Service, Privacy
              Policy and Use of Cookies.
            </p>
          </div>
        </div>
      </form>
    </article>
  );
};

export default Desktop2;

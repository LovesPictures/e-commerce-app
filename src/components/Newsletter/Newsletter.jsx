import React, { useState } from "react";

import "../Section/Section.css";
import "./Newsletter.css";

export const Newsletter = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleFormSubmit = (event) => {
    // An function to prevent default refresh of the form onload
    event.preventDefault();

    alert(" Thank you for singing up for my newsletter!");
  };

  return (
    <div id="Newsletter">
      <div className="Section__Container">

        <div className="Newsletter__form-body" name="Newsletter">
          <h2>Newsletter! </h2>
          <h2>
            It only takes a second to be the first to find out about our latest
            news{" "}
          </h2>

          <div className="Newsletter__signUp">         
          <div className="Newsletter__background-img">
            <img
              className="bgd__image"
              src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/banner2233.jpg"
              alt="#"
            />
</div>
            <fieldset>
              <form onSubmit={handleFormSubmit} id="Newsletter__form">
                <div id="Newsletter__form-email">
                  <label id="Newsletter__form-label" for="email"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={userEmail}
                    onChange={(event) => setUserEmail(event.target.value)}
                    className="form-control"
                    placeholder="Your Email Address"
                    required
                  />
                </div>

                <button
                  type="submit"
                  id="Newsletter__form-submit-Btn"
                  className="submit-button"
                >
                  Submit
                </button>
              </form>
              
            </fieldset>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

import React, { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  });

  return (
    <div className="calendar">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/fertichat/coaching-session?primary_color=4b00b5"
        style={{ minWidth: "320px", height: "100vh" }}
      />
    </div>
  );
};

export default Calendly;

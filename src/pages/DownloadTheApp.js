import React from "react";
import GooglePlay from "../assets/google-play.png";
import AppleStore from "../assets/apple-store.png";
import AppGallery from "../assets/app-gallery.png";

const DownloadTheApp = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "36px",
        marginTop: "100px",
      }}
    >
      حمل تطبيق القروبات على جوالك
      <br></br>
      <div style={{ display: "grid", placeItems: "center" }}>
        <img
          src={GooglePlay}
          width="360"
          height="108"
          style={{ margin: "5px" }}
        />
        <img
          src={AppleStore}
          width="360"
          height="108"
          style={{ margin: "5px" }}
        />
        <img
          src={AppGallery}
          width="360"
          height="108"
          style={{ margin: "5px" }}
        />
      </div>
    </div>
  );
};

export default DownloadTheApp;

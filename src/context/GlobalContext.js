import React, { useState } from "react";

const GlobalContext = React.createContext();
const themeConfigDefault = {
  headerDark: false,
  bodyDark: false,
  footerDark: false,
};

const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeConfigDefault);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);
  const [termsVisible, setTermsVisible] = useState(false);
  const [downloadVisible, setDownloadVisible] = useState(false);

  const changeTheme = (themeConfig = themeConfigDefault) => {
    setTheme({
      ...themeConfig,
    });
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleAbout = () => {
    setAboutVisible(!aboutVisible);
  };

  const closeAbout = () => {
    setAboutVisible(false);
  };

  const toggleContact = () => {
    setContactVisible(!contactVisible);
  };

  const toggleTerms = () => {
    setTermsVisible(!termsVisible);
  };


  const toggleDownload = () => {
    setDownloadVisible(!downloadVisible);
  };


  const closeContact = () => {
    setContactVisible(false);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        changeTheme,
        videoModalVisible,
        toggleVideoModal,
        aboutVisible,
        toggleAbout,
        closeAbout,
        contactVisible,
        termsVisible,
        toggleTerms,
        toggleDownload,
        downloadVisible,
        toggleContact,
        closeContact,
        visibleOffCanvas,
        toggleOffCanvas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };

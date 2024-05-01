import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import { Section, Box } from "../../components/Core";
import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero = () => {
  useEffect(() => {
    /*
    const script = document.createElement("script");

    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.setAttribute('data-ad-client','ca-pub-7812740777979704' );
          <AdSense.Google
            client='ca-pub-7812740777979704'
            slot='4295257051'
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
            data-adtest="on"
          />
           <ins className="adsbygoogle"
              style={{ display: 'block' ,   height : "0px"}}
              data-ad-client="ca-pub-7812740777979704"
              data-ad-slot="4295257051"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
    document.body.appendChild(script); 
   // uncomment after here
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({}); */
  }, []);

  return (
    <>
      {/* <!-- Hero Area --> */}

      <SectionStyled hero className="position-relative">
        <Container>
          <Box pb="40px">
            <div style={{ fontSize: "50px", textAlign: "right" }}>
              موقع القروبات
            </div>
            <div
              style={{
                fontWeight: `bold`,
                textAlign: "right",
                lineHeight: 1.6,
                fontSize: "25px",
              }}
            >
              اهلا بك في موقع القروبات اكبر موقع عربي لنشر وتصفح قروبات الواتساب
              والتيلجيرام
            </div>
          </Box>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;

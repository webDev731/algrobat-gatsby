import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Box, ListNav } from "../components/Core";
import WorkCard from "../components/WorkCard";
import { categories } from "../data";
import Hero from "../sections/landing3/Hero";
import bgHeroPattern from "../assets/image/webp/hero-pattern.webp";
import styled from "styled-components";


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

const Works = () => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {

    let url = window.location.href
    if (url.includes("telegram"))
      localStorage.setItem("option", "telegram")
    else
      localStorage.setItem("option", "whatsapp")

    console.log(localStorage.getItem("option"))  
    setItems(categories);
  }, []);

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Box pb="40px">
            <div style={{ fontSize: "50px", textAlign: "right" }}>الأقسام</div>
          </Box>          
        </Container>
      </SectionStyled>

      <Section className="position-relative">
        <Container>
          <Masonry
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >
            {items.map((item, index) => (
              <Col lg="6" md="6" sm="6" key={index} className="filtr-item">
                <WorkCard workItem={item} mb="30px" />
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </>
  );
};

export default Works;

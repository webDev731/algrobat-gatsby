import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { devWorks1 } from "../../data";

const Works = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(devWorks1);
  }, []);

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section style={{marginTop: "-80px"}} className="position-relative">
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
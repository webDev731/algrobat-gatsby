import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title } from "../../components/Core";
import google from "../../assets/google-play.png";
import apple from "../../assets/apple-store.png";
import gallery from "../../assets/app-gallery.png";

const Download = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <div style={{ textAlign: "center", marginTop: "-50px" }}>
                <Title color="light" variant="secSm">
                  حمل تطبيق القروبات على جوالك
                </Title>

                <a
                  className="nav-link mt-5"
                  href="https://play.google.com/store/apps/details?id=net.asmatechs.whatsappgroups"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ width: "360px", height: "108px" }}
                    src={google}
                    alt=""
                  ></img>
                </a>

                <a className="nav-link mt-4" href="#">
                  <img
                    style={{ width: "360px", height: "108px" }}
                    src={apple}
                    alt=""
                  ></img>
                </a>

                <a className="nav-link mt-4" href="#">
                  <img
                    style={{ width: "360px", height: "108px" }}
                    src={gallery}
                    alt=""
                  ></img>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Download;

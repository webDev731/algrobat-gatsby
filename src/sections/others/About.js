import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";

// const LinkSocial = styled.a`
//   color: ${({ theme }) => theme.colors.light} !important;
//   text-transform: uppercase;
//   font-weight: bold;
//   font-size: 13px;
//   letter-spacing: 1.63px;
//   transition: 0.4s;
//   &:hover {
//     color: ${({ theme }) => theme.colors.light} !important;
//     transform: translateY(-5px);
//   }
// `;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6"></Col>
            <Col lg="6">
              <div
                style={{ textAlign: "right" }}
                className="pl-lg-4 pt-5 pt-lg-0"
              >
                <Title color="light" variant="secSm">
                  القروبات
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  موقع القروبات تآسس عام 2015 ليكون اول واكبر موقع عربي يخدم
                  المجمتع العربي في ايجاد افضل القروبات العربية في برامج التواصل
                  الآجتماعيه مثل الواتساب و التيليجرام
                </Text>
                <div className="mt-4">
                  <Text color="light">راسلني على طريق البريد الاكتروني</Text>

                  <Text variant="p">
                    <a
                      href="mailto:info@algrobat.com"
                      className="font-weight-bold"
                    >
                      <Span color="light">info@algrobat.com</Span>
                    </a>
                  </Text>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;

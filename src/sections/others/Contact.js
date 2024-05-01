import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span, Box } from "../../components/Core";
import ContactForm from "../../components/ContactForm";
import { device } from "../../utils";

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  margin-top: 3rem;
  @media ${device.lg} {
    margin-top: 250px;
  }
`;

const Contact = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <div style={{textAlign : "right"}}>
          <Row className="justify-content-center">
            <Col lg="6">
              <Box className="pr-lg-5">
                <Title color="light" variant="secSm" mb="2rem">
                تواصل معنا
                </Title>
                <Text color="light" mb="2.75rem">                  
                </Text>
                <ContactForm theme="dark" />
              </Box>
            </Col>
            <Col lg="5">
              <ContactCard className="p-5 ml-lg-5">
                <div>
                  <Text color="light">راسلني على طريق البريد الاكتروني</Text>

                  <a href="mailto:info@algrobat.com" className="font-weight-bold">
                    <Span color="primary">info@algrobat.com</Span>
                  </a>
                </div>                
              </ContactCard>
            </Col>
          </Row>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;

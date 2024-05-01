import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { Box, Title, Button } from "../Core";
import GlobalContext from "../../context/GlobalContext";

const Footer = ({ isDark = true }) => {

  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Footer section --> */}
          
      <Box
        bg="bg"
        pt={[0, null, null, ".75rem"]}
        pb="3.75rem"
        css={`
          z-index: -50;
        `}
        className="position-relative"
      >
        <Container>
          <div className="text-center">       
            <Title
              variant="card"
              css={`
                font-size: 0.8125rem;
              `}
              className="text-uppercase mt-1"
            >
              © 2020 All right reseved
            </Title>
          </div>
          
        </Container>
      </Box>
    </>
  );
};

export default Footer;

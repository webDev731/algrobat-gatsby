import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Form, Card, FormControl, Button } from "react-bootstrap";
import { height } from "styled-system";
import "../sendBtn.css";

const ContactUs = () => {
  return (
    <>
      <Card
        style={{
          marginTop: "200px",
          width: "500px",
          height: "500px",
          marginLeft: "50px",
          backgroundColor: "white",
          border: "none",
        }}
      >
        <h2 style={{ textAlign: "right" }}>تواصل معنا</h2>
        <Form>
          <FormControl
            placeholder="اسمك"
            style={{
              textAlign: "right",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderRadius: "0px",
            }}
          />
          <FormControl
            placeholder="بريدك الاكتروني"
            style={{
              textAlign: "right",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderRadius: "0px",
              marginTop: "30px",
            }}
          />
          <FormControl
            placeholder="عنوان الرسالة"
            style={{
              textAlign: "right",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderRadius: "0px",
              marginTop: "30px",
            }}
          />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              placeholder="محتوى الرسالة"
              as="textarea"
              rows={3}
              style={{
                textAlign: "right",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderRadius: "0px",
                marginTop: "30px",
              }}
            />
          </Form.Group>
          <Button
            style={{
              borderRadius: "15px",
              padding: "15px",
              marginLeft: "400px",
            }}
            id="btn"
          >
            Send <AiOutlineArrowRight />
          </Button>
        </Form>
      </Card>
      <Card
        style={{
          textAlign: "right",
          backgroundColor: "#1b2341",
          marginLeft: "800px",
          marginTop: "-200px",
          width: "450px",
          height: "150px",
          borderRadius: "12px",
          color: "#495FEE",
        }}
      >
        <div style={{ margin: "25px" }}>
          <h5 style={{ color: "white" }}>راسلني على طريق البريد الاكتروني </h5>
          <br /> info@algrobat.com
        </div>
      </Card>
    </>
  );
};

export default ContactUs;

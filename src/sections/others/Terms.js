import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text } from "../../components/Core";

const Terms = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <div
                style={{ textAlign: "right" }}
                className="pl-lg-4 pt-5 pt-lg-0"
              >
                <Title color="light" variant="secSm">
                  سياسة الأستخدام
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  لبيئة نظيفة وجميلة في موقع وتطبيق القروبات
                </Text>
                <Text
                  color="light"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  تم اعتماد سياسة الاستخدام عبر منصات القروبات
                </Text>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  يمنع نشر المحتوى الاباحي و الجنسي بمختلف اشكاله -
                </Text>
                <Text
                  color="light"
                  className="mt-3"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  يمنع اضافه قروبات غير مخصص في قسمه المناسب -
                </Text>
                <Text
                  color="light"
                  className="mt-3"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  يمنع تكرار اضافه القروبات بشكل مزعج للمستخدمين -
                </Text>
                <Text
                  color="light"
                  className="mt-3"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  يمنع اضافه قروبات تنشر العنف والكراهية -
                </Text>
                <Text
                  color="light"
                  className="mt-3"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  يمنع اضافه قروبات تسبب في ضرر المستخدمين في اي شكل من الاشكال
                  -
                </Text>
                <Text
                  color="light"
                  className="mt-3"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  يجب كتابه اسم القروب بشكل واضح ومفهوم -
                </Text>
                <Text
                  color="light"
                  className="mt-3"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  يجب ان يكون اسم القروب مطابق للمحتوى -
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Terms;

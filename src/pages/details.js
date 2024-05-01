import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";
import { Link } from "gatsby";
import InfiniteScroll from "react-infinite-scroller";
import { Section, Button, Box } from "../components/Core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import app from "@firebase/app";
import "firebase/firestore";

import moment from "moment";
import "moment/min/moment-with-locales";
import "moment/locale/ar.js";
import bgHeroPattern from "../assets/image/webp/hero-pattern.webp";
import styled from "styled-components";

// moment.locale('ar');

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

//app.initializeApp(firebaseConfig);
const db = app.firestore();

const Works = () => {
  const mainArray = [
    "الرياضة",
    "وظائف",
    "التعليم ",
    "التقنية",
    "الصحة",
    "البيع والشراء",
    "السياسة",
    "العقارات",
    "اسلامية",
    "العاب",
    "ريادة اعمال",
    "نكت",
    "الصور والمصورين",
    "الإنمي",
    "غير مصنف",
  ];

  const telegramArray = [
    "القسم الرياضي هو قسم مخصص لقروبات وقنوات التيليجرام المتعلقة بالرياضة بكافة اشكالها وانواعها. مثال قروب متخصص فيديوهات لأهداف كرة القدم ",
    "قسم الوظائف مخصص لقروبات وقنوات التيليجرام المتخصصة في مساعدة الاشخاص الباحثين عن العمل او مساعدتهم لإيجاد فرص عمل افضل ",
    "القسم التعليمي مخصص لقروبات وقنوات التيليجرام المتخصصة بمواضيع التعلم بكافة اشكالها سواء كان تعليم دراسي او تعليم اي مهارة شخصية جديدة ",
    "القسم التقني مخصص لقروبات وقنوات التيليجرام المتخصصة في تغطية كافة مجالات التقنية مثل الهواتف الذكية والإنترنت وشبكات التواصل الاجماعي وغيره",
    "القسم الصحي مخصص لقروبات وقنوات التيليجرام التي تساعد نشر الثقافة الصحية بكافه طرقها",
    "قسم البيع والشراء هو قسم مخصص لقروبات وقنوات التيليجرام المتخصصة في البيع والشراء مثل بيع السيارات ، بيع الاثاث او بيع منتجات إلكترونية",
    "القسم السياسي هو قسم مخصص لقروبات وقنوات التيليجرام المتعلقه بكافة الجوانب السياسية من نقاشات ، معلومات او اخبار سياسة",
    "تعلقة بالأمور العقارية من نصائح ، اخبار ، بيع او صور",
    "القسم الإسلامي هو قسم مخصص لقروبات وقنوات التيليجرام المخصصة في نشر المحتوى الاسلامي من صور وفيديوهات ، معلومات ، او نقاشات",
    "قسم الألعاب هو مخصص لقروبات وقنوات التيليجرام المتخصصة بالالعاب ( القيمرز ) سواء كانت العاب جوال ، بلايستيشن ، اكس بوكس او غيره",
    "قسم ريادة الأعمال هو قسم مخصص لقروبات وقنوات التيليجرام المخصصة للمشاريع والافكار التجارية وأي شي يخص التجارة التقليدية والإكترونية",
    "قسم النكت مخصص لقروبات وقنوات التيليجرام المخصصه للترفيه والضحك بكافة اشكالها",
    "قسم الصور والمصورين هو قسم مخصص لقروبات وقنوات التيليجرام المخصصة للمصورين المحترفين والمبتدئين ولنشر الصور الاحترافيه وتعلم التصوير",
    "قسم الأنمي هو قسم مخصص لقروبات وقنوات التيليجرام المخصصة لعشاق الانمي من كوميك ومسلسلات وافلام وثاقة الانمي بشكل عام",
    "قسم الغير مصنف هو قسم مخصص للقروبات وقنوات التيليجرام اللتي لايوجد لها قسم مناسب موجود بالأقسام لقروبات وقنوات التيليجرام",
  ];

  const whatsappArray = [
    "القسم الرياضي هو قسم مخصص لقروبات الواتساب المتعلقة بالرياضة بكافة اشكالها وانواعها. مثال قروب متخصص فيديوهات لأهداف كرة القدم",
    "قسم الوظائف مخصص لقروبات الواتساب المتخصصة في مساعدة الاشخاص الباحثين عن العمل او مساعدتهم لإيجاد فرص عمل افضل",
    "القسم التعليمي مخصص لقروبات الواتساب المتخصصة بمواضيع التعلم بكافة اشكالها سواء كان تعليم دراسي او تعليم اي مهارة شخصية جديدة",
    "القسم التقني مخصص لقروبات الواتساب المتخصصة في تغطية كافة مجالات التقنية مثل الهواتف الذكية والإنترنت وشبكات التواصل الاجماعي وغيره",
    "القسم الصحي مخصص لقروبات الواتساب التي تساعد نشر الثقافة الصحية بكافه طرقها",
    "قسم البيع والشراء هو قسم مخصص لقروبات الواتساب المتخصصة في البيع والشراء مثل بيع السيارات ، بيع الاثاث او بيع منتجات إلكترونية",
    "القسم السياسي هو قسم مخصص لقروبات الواتساب المتعلقه بكافة الجوانب السياسية من نقاشات ، معلومات او اخبار سياسة",
    "القسم العقاري هو قسم مخصص لقروبات الواتساب المتعلقة بالأمور العقارية من نصائح ، اخبار ، بيع او صور",
    "القسم الإسلامي هو قسم مخصص لقروبات الواتساب المخصصة في نشر المحتوى الاسلامي من صور وفيديوهات ، معلومات ، او نقاشات",
    "قسم الألعاب هو مخصص لقروبات الواتساب المتخصصة بالالعاب ( القيمرز ) سواء كانت العاب جوال ، بلايستيشن ، اكس بوكس او غيره",
    "قسم ريادة الأعمال هو قسم مخصص لقروبات الواتساب المخصصة للمشاريع والافكار التجارية وأي شي يخص التجارة التقليدية والإكترونية",
    "قسم النكت مخصص لقروبات الواتساب المخصصه للترفيه والضحك بكافة اشكالها",
    "قسم الصور والمصورين هو قسم مخصص لقروبات الواتساب المخصصة للمصورين المحترفين والمبتدئين ولنشر الصور الاحترافيه وتعلم التصوير",
    "قسم الأنمي هو قسم مخصص لقروبات الواتساب المخصصة لعشاق الانمي من كوميك ومسلسلات وافلام وثاقة الانمي بشكل عام",
    "قسم الغير مصنف هو قسم مخصص للقروبات الواتساب اللتي لايوجد لها قسم مناسب موجود بالأقسام",
  ];

  const [items, setItems] = useState([]);
  const [mainColor, setMainColor] = useState([]);
  const [shouldLoadMore, setShouldLoadMore] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryDescription, setCategoryDescription] = useState([]);

  useEffect(() => {}, []);

  const masonryOptions = {
    transitionDuration: 1000,
  };

  function openData(provider, category) {
    const urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get("id");
    var provider = localStorage.getItem("option");
    if (myParam < 1 || myParam > 15) myParam = 15;

    var mCatDesc = "";
    setMainColor("#00E676");
    if (provider === "telegram") {
      mCatDesc = telegramArray[myParam - 1];
      setMainColor("#0088cc");
    } else {
      mCatDesc = whatsappArray[myParam - 1];
    }

    setCategoryDescription(mCatDesc);

    var mCategory = mainArray[myParam - 1];
    setCategory(mCategory);

    if (myParam == 3) mCategory = "التعليم";

    var query = db
      .collection("groups")
      .where("provider", "==", provider)
      .where("category", "==", mCategory)
      .orderBy("dateAdded", "desc")
      .limit(50);

    if (items.length > 0) query.startAfter(items[items.length - 1]);

    query.get().then((querySnapshot) => {
      // Received an array
      var data = querySnapshot.docs.map((doc) => doc.data());
      var dataList = items;

      data.map((mData) => {
        if (mData.rating === undefined || mData.rating == "") mData.rating = 0;
        if (mData.status === undefined) mData.status = true;
        if (mData.status) dataList.push(mData);
      });

      setItems(dataList);

      setTimeout(() => {
        if (data.length != 50) {
          setShouldLoadMore(false);
        } else setShouldLoadMore(true);
      }, 100);
    });
  }

  function onInfiniteLoad(page) {
    setShouldLoadMore(false);
    openData();
  }

  return (
    <>
      {/* <!-- Works Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Box pb="40px">
            <div style={{ fontSize: "50px", textAlign: "right" }}>
              {category}
            </div>
            <div
              style={{
                fontWeight: `bold`,
                lineHeight: 1.6,
                fontSize: "25px",
                textAlign: "right",
              }}
            >
              {categoryDescription}
            </div>
          </Box>
        </Container>
      </SectionStyled>

      <Section className="position-relative">
        <Container>
          <InfiniteScroll
            pageStart={1}
            loadMore={onInfiniteLoad}
            hasMore={shouldLoadMore}
          >
            <Masonry
              loader={<div>{"Loading ..."}</div>}
              options={masonryOptions}
              className={"masonry-grid row"} // default ''
            >
              {items.map((item, index) => (
                <Col lg="6" md="6" sm="6" key={index} className="filtr-item">
                  <div
                    dir="rtl"
                    style={{
                      height: 340,
                      border: "1px solid lightgray",
                      marginTop: 20,
                      padding: "10px",
                      borderRadius: "5px",
                      boxShadow: "1px 1px 5px gray",
                      marginBottom: "10px",
                    }}
                  >
                    <Link to={"/detail?id=" + item.groupLink}>
                      <h3 style={{ textAlign: "center", padding: "10px" }}>
                        {item.groupName}
                      </h3>
                    </Link>
                    <div style={{ textAlign: "left", fontSize: 16 }}>
                      {moment(item.dateAdded).fromNow()}
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontWeight: "bold", marginLeft: "auto" }}>
                        البلدة:&nbsp;
                      </span>
                      {item.country}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        height: 78,
                        overflow: "hidden",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>الوصف:&nbsp;</span>
                      {item.groupDescription}
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        fontSize: "21px",
                        marginTop: 15,
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ height: 20, marginLeft: 2 }}
                        icon={faHeart}
                      />
                      <span>&nbsp;{item.rating}&nbsp;</span>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "auto" }}>
                      <Button
                        onClick={() => window.open(item.groupLink, "_blank")}
                        style={{
                          backgroundColor: mainColor,
                          fontSize: 20,
                          textAlign: "center",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;اضافة&nbsp;&nbsp;&nbsp;
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Masonry>
          </InfiniteScroll>
        </Container>
      </Section>
    </>
  );
};

export default Works;

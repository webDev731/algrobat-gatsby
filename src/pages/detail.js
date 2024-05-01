import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";

import { Section, Button } from "../components/Core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import app from "@firebase/app";
import "firebase/firestore";

import moment from "moment";
import "moment/min/moment-with-locales";
import "moment/locale/ar.js";

// moment.locale("ar");

// const SectionStyled = styled(Section)`
//   &::before {
//     position: absolute;
//     top: 0;
//     content: "";
//     width: 100%;
//     height: 120%;
//     background: url(${bgHeroPattern}) top center no-repeat;
//     background-size: cover;
//     z-index: -1;
//   }
// `;

//app.initializeApp(firebaseConfig);
const db = app.firestore();

const Works = () => {
  const [items, setItems] = useState([]);
  const [mainColor, setMainColor] = useState([]);
  const [shouldLoadMore, setShouldLoadMore] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get("id");
    var query = db
      .collection("groups")
      .where("groupLink", "==", myParam)
      .limit(1);
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
  }, []);

  const masonryOptions = {
    transitionDuration: 1000,
  };

  function openData() {
    const urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get("id");
    var query = db
      .collection("groups")
      .where("groupLink", "==", myParam)
      .limit(1);

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

      <Section className="position-relative">
        <Container>
          {/* <InfiniteScroll  
            pageStart={1}  
            loadMore={onInfiniteLoad}  
            hasMore={shouldLoadMore}  
          >   */}
          {/* <Masonry
            loader={<div>{'Loading ...'}</div>}
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >             */}
          {items.map((item, index) => (
            <Col lg="12" md="12" sm="12" key={index} className="filtr-item">
              <div
                dir="rtl"
                style={{
                  height: 410,
                  border: "1px solid lightgray",
                  marginTop: 20,
                  padding: "10px",
                  borderRadius: "5px",
                  boxShadow: "1px 1px 5px gray",
                  marginBottom: "10px",
                }}
              >
                <h3 style={{ textAlign: "center", padding: "10px" }}>
                  {item.groupName}
                </h3>
                <div style={{ textAlign: "left", fontSize: 16 }}>
                  {moment(item.dateAdded).fromNow()}
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontWeight: "bold", marginLeft: "auto" }}>
                    اسم المزود:&nbsp;
                  </span>
                  {item.provider}
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontWeight: "bold", marginLeft: "auto" }}>
                    اسم التصنيف:&nbsp;
                  </span>
                  {item.category}
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontWeight: "bold", marginLeft: "auto" }}>
                    البلدة:&nbsp;
                  </span>
                  {item.country}
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontWeight: "bold", marginLeft: "auto" }}>
                    لغة:&nbsp;
                  </span>
                  {item.language}
                </div>
                <div
                  style={{ textAlign: "right", height: 78, overflow: "hidden" }}
                >
                  <span style={{ fontWeight: "bold" }}>الوصف:&nbsp;</span>
                  {item.groupDescription}
                </div>
                <div
                  style={{ textAlign: "left", fontSize: "21px", marginTop: 15 }}
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
          {/* </Masonry> */}
          {/* </InfiniteScroll> */}
        </Container>
      </Section>
    </>
  );
};

export default Works;

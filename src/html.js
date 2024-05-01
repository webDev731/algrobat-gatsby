import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>موقع القروبات</title>
        <meta
          property="og:description"
          content="اهلا بك في موقع القروبات اكبر موقع عربي لنشر وتصفح قروبات الواتساب والتيلجيرام"
        />
        <meta property="og:site_name" content="موقع القروبات" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="article:author" content="https://www.facebook.com/" />
        <meta property="article:section" content="categories?type=whatsapp" />
        <meta
          property="og:url"
          content="https://alkarubat.web.app/categories?type=whatsapp"
        />
        <meta
          property="og:image"
          content="https://alkarubat.web.app/static/whatsapp-6b6fb3d16064251c6029d62ebee1bdc2.jpg"
        />
        <meta
          name="description"
          content="اهلا بك في موقع القروبات اكبر موقع عربي لنشر وتصفح قروبات الواتساب والتيلجيرام"
        />
        <meta
          name="keywords"
          content="قروبات - مجموعات - قروبات واتس - مجموعات واتس - قروبات واتساب - مجموعات واتساب- واتساب العرب - واتس العرب - قروبات وتساب - مجموعات وتساب - قروبات واتس اب -قروبات الواتساب - جروبات واتساب - كروبات واتساب - قروبات واتساب عربيه - مجموعات عربيه جديده - قنوات تيليقرام - قناه تيليقرام -قروبات تيليجرام - مجموعات تيليجرام"
        />
        <meta
          name="google-site-verification"
          content="qIgl34T-0JHZYLr_EaXJR3P47lsL62hJitBDhE8syY8"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3DT3TZWC8F"
        ></script>

        <script
          data-ad-client="ca-pub-7812740777979704"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

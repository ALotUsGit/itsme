import { HelmetProvider, Helmet } from "react-helmet-async";

const Meta = (props: any) => {
  const {
    title = "JEON A RYEON",
    description = "전아련의 포트폴리오",
    autor = "aryeon",
    subject = "aryeon's portfolio",
    copyright = "Aryeon Jeon",
    keywords = "React, portfolio, frontend",
    url = window.location.href,
    image = "/images/alotus.svg",
    icon = null,
    shortchtIcon = null,
    appleTouchIcon = null,
  } = props;
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        {/* SEO 태그 */}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="autor" content={autor} />
        <meta name="subject" content={subject} />
        <meta name="copyright" content={copyright} />
        <meta name="content-language" content="ko" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        <link rel="icon" href={icon} type="image/png" />
        <link rel="shortcht icon" href={shortchtIcon} type="image/png" />
        <link rel="apple-touch-icon" href={appleTouchIcon} type="image/png" />

        {/* 구글 웹폰트 적용 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/static/woff2/SUIT.css"
          rel="stylesheet"
        />
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;

import styled from "styled-components";

import main from "../../assets/main.png";
import MediaQuery from "../../components/MediaQuery";

const MainCont = styled.main`
  margin-top: 8rem;

  .sec01 {
    max-width: 128rem;
    margin: 0 auto;
    padding: 0 2.4rem;
    text-align: center;

    h2 {
      font-size: 6rem;

      ${MediaQuery.maxWidth("md")`
        font-size: 4rem;
      `}
    }

    p {
      margin: 2rem 0 6rem;
      color: #9ca3af;
      font-size: 2.4rem;
    }
  }
`;

const Main = () => {
  return (
    <MainCont>
      <section className="sec01">
        <h2>JEON A RYEON</h2>
        <p>Front-End Developer</p>
        <div className="img_wrap">
          <img src={main} alt="" />
        </div>
      </section>
    </MainCont>
  );
};
export default Main;

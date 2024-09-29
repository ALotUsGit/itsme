import styled from "styled-components";
import MediaQuery from "./MediaQuery";

const HeaderCont = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 3.6rem;

  p {
    color: #9ca3af;

    ${MediaQuery.maxWidth("sm")`
      display: none;
    `}
  }
`;

const Header = () => {
  return (
    <HeaderCont>
      <h1>
        <img src="/images/alotus.svg" className="" alt="alotus" />
      </h1>
      <p>arjeon.career@gmail.com</p>
    </HeaderCont>
  );
};
export default Header;

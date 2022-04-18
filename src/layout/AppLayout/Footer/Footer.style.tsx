import styled from "styled-components";

export const FooterTop = styled.div`
  display: flex;
  @media screen and (max-width: 1400px) {
    & {
      flex-direction: column !important;
      align-items: center !important;
    }
  }
`;
export const FooterItem = styled.div`
  width: 40%;
  @media screen and (max-width: 550px) {
    & {
      width: 210px !important;
    }
  }
`;
export const FooterTwoItem = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  @media screen and (max-width: 1400px) {
    & {
      display: flex !important;
      justify-content: space-between !important;
      margin-top: 10px !important;
      width: 600px !important;
    }
  }
  @media screen and (max-width: 850px) {
    & {
      width: 510px !important;
    }
  }
  @media screen and (max-width: 550px) {
    & {
      flex-direction: column !important;
      align-items: center !important;
      width: 100% !important;
    }
  }
`;
export const HomeFooterOut = styled.div`
  border-top: 1px solid #a1abb9;
  padding-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const HomeFooter = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
export const HomeFooterItemTitle = styled.div`
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #e1e4e8;
  font-size: 25px;
  font-weight: 800;
`;

export const FooterItemLink = styled.span`
  height: 50px;
  font-size: 16px;
  align-items: center;
  color: #a1abb9;
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-decoration: none;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 15px;
    left: 0;
    background-color: #2bd2ff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  :hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
`;
export const FooterIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  cursor: pointer;
  border: 1px solid #a1abb9;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a1abb9;
`;
export const FooterContact = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
export const FooterContactLine = styled.div`
  border-left: 1px solid white;
  height: 20px;
  margin: 3px 5px;
`;
export const FooterBottom = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  @media screen and (max-width: 550px) {
    & {
      font-size: 13px !important;
    }
  }
`;
export const FooterMiddle = styled.div`
  margin-top: 120px;
`;

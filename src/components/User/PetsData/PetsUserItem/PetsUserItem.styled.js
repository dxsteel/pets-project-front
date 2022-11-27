import styled from "@emotion/styled";
import { TrashButton } from "components/Button";

export const PetsItem = styled.div`
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 16px 20px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${p => p.theme.media.tablet} {
    margin-top: 24px;
    flex-direction: row;
    padding: 20px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: 24px;
    flex-direction: row;
  }
`;

export const PetsImage = styled.img`
  border-radius: 20px;
  width: 233px;
  height: 233px;
  margin-bottom: 20px;
  @media ${p => p.theme.media.tablet} {
    border-radius: 40px;
    margin-right: 32px;
    width: 161px;
    height: 161px;
  }
  @media ${p => p.theme.media.desktop} {
    border-radius: 40px;
    margin-right: 32px;
    width: 240px;
    height: 240px;
  }
`;

export const PetsItemPara = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  letter-spacing: 0.04em;
  color: #000000;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 22px;
  @media ${p => p.theme.media.tablet} {
    font-size: 18px;
    line-height: 25px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${p => p.theme.media.desktop} {
  }
`;

export const DeleteButton = styled(TrashButton)`
  position: absolute;
  right: 30px;
  top: -18px;
  width: 0px;
  border: none;
  font: inherit;
  background: rgba(17, 17, 17, 0.6);
  background-color: transparent;
  @media ${p => p.theme.media.tablet} {
    background-color: #fdf7f2;
    backdrop-filter: blur(2px);
    // border: 1px solid red;
    width: 44px;
    right: 10px;
    top: 5px;
  }
  @media ${p => p.theme.media.desktop} {
    background-color: #fdf7f2;
    backdrop-filter: blur(2px);
    // border: 1px solid red;
    width: 44px;
    right: 10px;
    top: -20px;
  }
`;
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  top: 161px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: ${p => p.theme.radio.btn};
  padding: 60px 20px 40px 20px;
  background-color: ${p => p.theme.colors.white};

  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media ${p => p.theme.media.tablet} {
    // top: 262px;
    padding: 32px 20px;
    width: 704px;
  }
  @media ${p => p.theme.media.desktop} {
    // top: 400px;
    padding: 32px 20px;
    width: 704px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  margin: 0 auto 16px auto;
  @media ${p => p.theme.media.tablet} {
    width: 288px;
    height: 328px;
    margin: 0 20px 0 0;
  }
  @media ${p => p.theme.media.desktop} {
    width: 288px;
    height: 328px;
    margin: 0 20px 0 0;
  }
`;

const CategoryLabel = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 158px;
  padding: 6px 20px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  border-radius: 0 20px 20px 0;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const ImageThumb = ({ src, alt = "", category }) => (
  <ImageWrapper>
    <img src={src} alt={alt} />
    {category && <CategoryLabel>{category}</CategoryLabel>}
  </ImageWrapper>
);

export const Title = styled.h3`
  width: 190px;
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.heading};
  margin-bottom: 16px;

  @media ${p => p.theme.media.tablet} {
    width: 228px;
    font-size: 28px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 228px;
    font-size: 28px;
  }
`;

export const InfoWrapper = styled.div`
  @media ${p => p.theme.media.tablet} {
    display: flex;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
  }
`;

const Info = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: 600;
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.m};
  }
  @media ${p => p.theme.media.desktop} {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

const Data = styled.span`
  width: 50%;
  font-size: ${p => p.theme.fontSizes.s};
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.heading};
  }
  @media ${p => p.theme.media.desktop} {
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.heading};
  }
`;

export const InfoItem = ({ label, data }) => (
  <Info>
    <Label>{label}</Label>
    <Data>{data}</Data>
  </Info>
);

const DescriptionText = styled.p`
  margin: 28px 0 40px 0;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};

  @media ${p => p.theme.media.tablet} {
    margin-bottom: 32px;
    font-size: ${p => p.theme.fontSizes.m};
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 32px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

const DescriptionLabel = styled.span`
  font-weight: 600;
`;

export const Description = ({ text }) => (
  <DescriptionText>
    <DescriptionLabel>Comments: </DescriptionLabel>
    {text}
  </DescriptionText>
);
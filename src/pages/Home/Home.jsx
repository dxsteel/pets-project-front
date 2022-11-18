import { Container, Title, HomeImage, Gradient, Heart, BackgroundImage, ImgContainer, ContentContainer } from "./Home.styled";
import girl from "img/homePages-photos/desktop-girl-1x.png";
import background from "img/homePages-photos/mobile-gradient-2x.png";
import heart from "img/homePages-photos/desktop-heart-1x.png";
import gradient from "img/homePages-photos/Frame.png";
// import BurgerMenu from "components/BurgerMenu/BurgerMenu";

const Home = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>Take good care of your small pets</Title>
      </ContentContainer>

      <ImgContainer>
        <HomeImage src={girl} alt="homePhoto" />
        <BackgroundImage src={background} alt="homeBckg" />
        <Gradient src={gradient} alt="GradientTop" />
        <Heart src={heart} alt="heart" />
      </ImgContainer>
    </Container>
  );
};

export default Home;

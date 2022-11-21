import { Container, Title, Div } from "./NoticesPage.styled";
import { useEffect, useState } from "react";
import { fetchPets, fetchFavoritePets, fetchOwnPets } from "api/fetchPets";
import NoticesCategoriesNav from "components/NoticesCategoriesNav";
import NoticesSearch from "components/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import AddNoticeButton from "components/AddNoticeButton";

// import { useParams } from "react-router-dom";
// import { useGetNoticesByCategoryQuery } from "redux/notices/noticesApi";

export default function NoticesPage() {
  const [category, setCategory] = useState("");
  const [pets, setPets] = useState([]);
  // console.log(pets);

  // const { categoryName } = useParams(); 
  // get category from url params
  // const { data: notices = [], isError, isFetching } = useGetNoticesByCategoryQuery(categoryName); 
  // creting fn for fetching data by category and status (error, fething)
  // console.log(notices, isError, isFetching);

  useEffect(() => {
    if (category === "favorite") {
      fetchFavoritePets(category).then(data => setPets(data));
    }
    if (category === "own") {
      fetchOwnPets(category).then(data => setPets(data));
    }
    fetchPets(category).then(data => setPets(data));
  }, [category]);

  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch onChange={value => setPets(value)} />
      <Div>
        <NoticesCategoriesNav onCategoryChange={value => setCategory(value)} />
        <AddNoticeButton />
      </Div>

      <NoticesCategoriesList petsList={pets} />
    </Container>
  );
}
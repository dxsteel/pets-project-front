import { useState } from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { useAddNoticeToFavoritesMutation, useGetNoticesByCategoryQuery, useGetFavoriteNoticesQuery } from "redux/notices/noticesApi";
import { NOTICE_ITEM_KEYS, NOTICE_CATEGORY_LABELS } from "constants/petInfoKeys";
import { notifyWarning, notifyError } from "helpers/toastNotifications";
import ModalNotice from "components/Modal/ModalNotice";
import { useParams } from "react-router-dom";
import { Container, InfoItem, ImageWrapper, CategoryLabel, InfoWrapper, Title, AddToFavorites } from "./NoticeCategoryItem.styled";
import { LearnMoreBtn } from "components/Button/LearnMoreButton/LearnMoreButton.styled";

import itemImage from "../../img/pet-photos/default.jpg";

// props = { data: { }}
const NoticeCategoryItem = ({ data }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userId = useSelector(authSelectors.getUserId);
  const [addNoticeToFavorites, { isLoading }] = useAddNoticeToFavoritesMutation();
  const { refetch } = useGetFavoriteNoticesQuery();
  const { categoryName } = useParams();
  const { refetch: categoryRefetch } = useGetNoticesByCategoryQuery(categoryName, {
    skip: categoryName === "favorite" || categoryName === "own",
  });
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(!isLoading && data.fans.includes(userId));

  const handleModalToggle = () => {
    setExpanded(prev => {
      document.body.className = prev ? "" : "no-scroll";
      return !prev;
    });
  };

  const handleAddToFavoritesClick = async () => {
    if (!isLoggedIn) return notifyWarning("You need to log in to perform this action");
    try {
      await addNoticeToFavorites(data._id);
      setFavorite(!favorite);
      refetch();
      categoryRefetch();
    } catch (error) {
      notifyError(error);
    }
  };

  return (
    <>
      <Container>
        <ImageWrapper>
          <img src={data.avatarURL || itemImage} alt={data.title} />
          <CategoryLabel>{NOTICE_CATEGORY_LABELS[data?.category]}</CategoryLabel>
        </ImageWrapper>

        <InfoWrapper>
          <Title>{data.title}</Title>
          <ul>
            {NOTICE_ITEM_KEYS.map(({ label, key, category }) => {
              if (category && category !== data.category) return null;

              return <InfoItem key={key} label={label} data={data[key]} />;
            })}
          </ul>
        </InfoWrapper>
        <LearnMoreBtn onClick={handleModalToggle}>Learn more</LearnMoreBtn>
        <AddToFavorites onClick={handleAddToFavoritesClick} authorized={!isLoading && isLoggedIn} isFavorite={favorite} />
      </Container>

      {expanded && (
        <ModalNotice id={data._id} handleModalToggle={handleModalToggle} handleAddToFavoritesClick={handleAddToFavoritesClick} favorite={favorite} />
      )}
    </>
  );
};

export default NoticeCategoryItem;

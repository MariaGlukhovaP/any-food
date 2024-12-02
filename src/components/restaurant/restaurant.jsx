import { useAuth } from "../auth-context/use-auth";
import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import styles from "./restaurant.module.css";

export const Restaurant = ({ name, menu, reviews }) => {
  const { auth } = useAuth();

  return (
    <section className={styles.restaurantContainer}>
      <h2 className={styles.restaurantName}>{name}</h2>
      <div className={styles.cardsSections}>
        {Boolean(menu.length) && <Menu menu={menu} />}
        {Boolean(reviews.length) && <Reviews reviews={reviews} />}
        {auth.isAuthorized && <ReviewForm />}
      </div>
    </section>
  );
};

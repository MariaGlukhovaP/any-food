import styles from "./dish-page.module.css";
import { DishContainer } from "../../components/dish/dish-container";

export const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return (
    <div className={styles.dishPage}>
      <DishContainer dishId={dishId} />
    </div>
  );
};

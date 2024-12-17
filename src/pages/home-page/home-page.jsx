import { Description } from "../../components/description/description";
import { TabLink } from "../../components/tab-link/tab-link";
import styles from "./home-page.module.css";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Description />
      <div className={styles.linkContainer}>
        <TabLink href="/restaurants" title="Restaurants" />
      </div>
    </div>
  );
};

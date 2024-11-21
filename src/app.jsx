import { ProgressBar } from "../progress-bar/progress-bar";
import { Layout } from "./components/layout/layout";
import { Restaurants } from "./components/restaurants/restaurants";

export const App = () => {
  return (
    <Layout progressBar={ProgressBar}>
      <Restaurants />
    </Layout>
  );
};

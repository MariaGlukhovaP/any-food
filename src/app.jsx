import { Layout } from "./components/layout/layout";
import { ProgressBar } from "./components/progress-bar/progress-bar";
import { Restaurants } from "./components/restaurants/restaurants";

export const App = () => {
  return (
    <Layout progressBar={ProgressBar}>
      <Restaurants />
    </Layout>
  );
};

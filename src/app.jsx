import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "./app.css";
import { AuthContextProvider } from "./components/auth-context/auth-context";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

import "./../app.css";

import { AuthContextProvider } from "../components/auth-context/auth-context";
import { ThemeContextProvider } from "../components/theme-context/theme-context";
import { Layout } from "../components/layout/layout";
import { ReduxProvider } from "../redux/provider";

export const metadata = {
  title: "Food Delivery App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/img/favicon/icons8-pizza-ios-17-outlined-16.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="/img/favicon/icons8-pizza-ios-17-outlined-32.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="/img/favicon/icons8-pizza-ios-17-outlined-96.png"
          type="image/png"
        />
      </head>
      <body>
        <div id="root">
          <ReduxProvider>
            <AuthContextProvider>
              <ThemeContextProvider>
                <Layout>{children}</Layout>
              </ThemeContextProvider>
            </AuthContextProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}

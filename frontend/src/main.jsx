import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-hswfioqdfn43xhfj.us.auth0.com"
      clientId="pRTttb8wCq3TgOIaI5AigKcEKfFJuYzp"
      authorizationParams={{
        redirect_uri: "https://reallink.vercel.app",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <MantineProvider>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </StrictMode>
);

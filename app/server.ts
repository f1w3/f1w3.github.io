import { showRoutes } from "hono/dev";
import { createApp } from "honox/server";
import { createHono } from "honox/factory";
import { languageDetector } from "hono/language";
import { csrf } from "hono/csrf";

export const baseApp = createHono();
baseApp.use(csrf());
baseApp.use(
    languageDetector({
        supportedLanguages: ["en", "ja"],
        fallbackLanguage: "en",
    })
);

const app = createApp({ app: baseApp });
showRoutes(app);

export default app;

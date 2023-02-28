import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.pcss";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://1634e2ce893d409d94ef531b0f47f2f5@o4504744885026816.ingest.sentry.io/4504744886927360",
  logErrors: true,
  release: __SENTRY_RELEASE__,
  environment: import.meta.env.MODE,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.2,
});

app.use(router);
app.mount("#app");

const user = {
  email: "blefgufin@gmail.com",
};

Sentry.setUser(user);
Sentry.configureScope((scope) => scope.setUser(null));

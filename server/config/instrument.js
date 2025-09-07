// // Import with `import * as Sentry from "@sentry/node"` if you are using ESM
// import * as Sentry from "@sentry/node"


// Sentry.init({
//   dsn: "https://7299ee725618454f6c7968c87994e583@o4509962340990976.ingest.us.sentry.io/4509962346233856",
//   // Setting this option to true will send default PII data to Sentry.
//   // For example, automatic IP address collection on events
//   sendDefaultPii: true,
// });

// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://7299ee725618454f6c7968c87994e583@o4509962340990976.ingest.us.sentry.io/4509962346233856",
  sendDefaultPii: true,  // collect user IP, etc.
  integrations: [
    Sentry.mongooseIntegration(), // 👈 Add mongoose integration here
  ],
});

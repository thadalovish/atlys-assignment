// import * as Sentry from "@sentry/react";
import { CaptureContext } from "@sentry/types";

if (
  process.env.REACT_APP_ENV &&
  ["PRODUCTION"].includes(`${process.env.REACT_APP_ENV}`)
) {
  // add sentry credentials soon for tracking
  //   Sentry.init({
  //     dsn: "",
  //     environment: "",
  //     normalizeDepth: 10,
  //   });
}

const logException = (error: Error | unknown, info?: CaptureContext) => {
  if (
    process.env.REACT_APP_ENV &&
    ["production"].includes(`${process.env.REACT_APP_ENV}`)
  ) {
    // Sentry.captureException(error, info);
  }
};
const loggerObj = { logException };

export default loggerObj;

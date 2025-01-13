// https://github.com/yhatt/marp-cli-example/blob/master/marp.config.mjs
const canonicalUrl = process.env.URL || undefined;

const config = {
  allowLocalFiles: true,
  themeSet: "themes",
  url: canonicalUrl,
};

export default config;

module.exports = {
  targets: { node: 18 },
  presets: [
    ["@babel/preset-env"],
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-typescript", { allowDeclareFields: true }],
    "@wyw-in-js/babel-preset",
  ],
};

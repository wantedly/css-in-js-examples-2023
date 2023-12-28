import { babel } from "@rollup/plugin-babel";
import css from "rollup-plugin-import-css";
import wyw from "@wyw-in-js/rollup";

export default {
  input: {
    basic: "src/basic.tsx",
    parameterized: "src/parameterized.tsx",
  },
  output: {
    format: "es",
    dir: "dist",
    preserveModules: true,
    assetFileNames({ name }) {
      return name?.replace(/^src\//, '') ?? '';
    }
  },
  external: (id) => !/^([./]|src\/)/.test(id),
  plugins: [
    wyw({
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
    css({ output: "styles.css" }),
    babel({ babelHelpers: "bundled", extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx', '.mts'] }),
  ],
};

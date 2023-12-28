import { babel } from "@rollup/plugin-babel";

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
    babel({ babelHelpers: "bundled", extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx', '.mts'] }),
  ],
};

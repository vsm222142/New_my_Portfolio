import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/New_my_Portfolio/",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   base: "/New_my_Portfolio/", // 👈 repo name same rakho
//   plugins: [
//     react({
//       babel: {
//         plugins: [["babel-plugin-react-compiler"]],
//       },
//     }),
//   ],
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   base: "/My_New_Portfolio/",   // 👈 repo name same rakho
//   plugins: [react()],
// });

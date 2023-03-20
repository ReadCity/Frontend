import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@src": path.join(process.cwd(), "src"),
            "@api": path.join(process.cwd(), "src", "api"),
            "@assets": path.join(process.cwd(), "src", "assets"),
            "@data": path.join(process.cwd(), "src", "data"),
            "@components": path.join(process.cwd(), "src", "components"),
            "@handlers": path.join(process.cwd(), "src", "handlers"),
            "@pages": path.join(process.cwd(), "src", "pages"),
            "@schemas": path.join(process.cwd(), "src", "schemas"),
            "@styles": path.join(process.cwd(), "src", "styles"),
            "@types": path.join(process.cwd(), "src", "types"),
            "@layouts": path.join(process.cwd(), "src", "layouts"),
            "@hooks": path.join(process.cwd(), "src", "hooks"),
        },
    }
});

// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import bun from '@nurodev/astro-bun';

import icon from "astro-icon";

export default defineConfig({
    output: "server",
    vite: {
        plugins: [tailwindcss()],
    },
    adapter: bun(),
    integrations: [icon()],
});
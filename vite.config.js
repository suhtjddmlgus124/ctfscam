import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

const domain = "sasa2o25ctf.kro.kr";
fs.writeFileSync('public/CNAME', domain);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
});

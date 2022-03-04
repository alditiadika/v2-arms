# atomic-design

**How to use**
  -Require nodejs and npm
  -Copy .template.env to .env and edit it
  -Run "npm install" to install the dependencies.
  -Run "npm start" to start the server as production mode.
  -Run "npm run dev" to start the server as development mode.
  -Run "npm run build" to build the project as production mode.
  -Run "npm run lint" to lint the code.
  -Run "npm run clean" to clean the build directory and reinstall depedencies.


**This Code made by React Typescript & Webpack as builder and atomic design principle with structure**:
  src
    |__sw.ts (as service worker)
    |__index.ts (as start point react code)
    |__assets (contain all asset data like image, font, etc)
    |__components (contain all react component)
    |    |__atoms (contain all react component that categorized as atom like button, text, typography etc)
    |    |__molecules (contain all react component that categorized as molecule like card, group button, etc)
    |    |__organisms (contain all react component that categorized as organism like form, pagination, etc)
    |    |__templates (contain all react component that categorized as template like grid, etc)
    |__pages (contain all react page like home, about, etc)
    |   |__app.tsx (as start point react page)
    |   |__routes.tsx (as react list of primary route)
    |__services (contain all service that used in react code, categorized with folder name like pages folder)
    |__store (contain all redux store that used in react code)
    |__utils (contain all utility function that used in react code)
  .env (contain all environment variable that used in react code)
  .index.js (as start point webpack build/production mode)
  webpack.config.js (as webpack configuration)
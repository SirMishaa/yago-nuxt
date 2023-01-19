# Yago-Nuxt

This repository contains the source code for the yago-nuxt project for the hackathon. This repository use mainly these technologies:

![Nuxt](https://img.shields.io/badge/Nuxt.js-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## Set up the project

#### ASDF 
At the root of the repository, there is a file called `.tool-versions`. This file contains the version of the tools used in the project. 
You can use [ASDF](https://asdf-vm.com/#/) to install the right version of the tools.

First, install all the required plugins for ASDF:
```bash
cut -d' ' -f1 .tool-versions | xargs -i asdf plugin add  {} 
```
Then, you can do the following command to install all the tools with the right version:
```bash
asdf install
```
After that, install the dependencies:
```bash
pnpm install
```
You're ready to go! 🚀

### Docker
You can also use Docker to run the project. You need to have Docker installed on your machine. 
Then, you can run the following command to build the image:
```bash
docker compose up --build
```
All the dependencies will be installed and the project will start automatically! 🚀

## Available commands
- `pnpm run build`: Build the project using **Vite**, nuxt will creates a ``.output`` directory with all the application, server and dependencies ready for production.
- `pnpm run dev`: Start the project in development mode.
- `pnpm run generate`: Pre-renders every route of application and stores the result in plain HTML files that can deploy on any static hosting services.
- `pnpm run preview`: Start a server to preview your Nuxt application after running the build command.
- `pnpm run postinstall`: Run automatically after the installation of dependencies for generating type definitions for the project into the .nuxt folder.
- `pnpm run lint`: Show and try to correct some error in the code using ESLint.
- `pnpm run format`: Format automatically the code using Prettier.
- `pnpm run typecheck`: Check the validity of Typescript types of the code using vue-tsc.
- `pnpm run lint:all`: Execute lint, format, and typecheck commands.

You can run directly these command with your IDE in `package.json` file.

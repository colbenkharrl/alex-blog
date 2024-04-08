# Alex Kharrl Personal Website

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)![Next JS](https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white)![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=flat-square&logo=markdown&logoColor=white)![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat-square&logo=eslint&logoColor=white)![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=flat-square&logo=prettier&logoColor=F7BA3E)![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=flat-square&logo=yarn&logoColor=white)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=flat-square&logo=webpack&logoColor=black)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=flat-square&logo=babel&logoColor=black)![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=flat-square&logo=githubactions&logoColor=white)![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white)

![website opengraph image](/src/app/opengraph-image.png)

This is the code project behind my [personal website and professional portfolio](https://alex.kharrl.com/).

## Technology

The core technologies used in this project are:

| Category                 | Technology                                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| **Programming Language** | [TypeScript](https://www.typescriptlang.org/)                                                         |
| **Frontend Libraries**   | [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [MDX](https://mdxjs.com/)      |
| **Web Frameworks**       | [Next.js](https://nextjs.org/), [Node.js](https://nodejs.org/en)                                      |
| **Developer Experience** | [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [NVM](https://github.com/nvm-sh/nvm) |
| **Build Tools**          | [Yarn](https://yarnpkg.com/), [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/)        |
| **CI/CD**                | [GitHub Actions](https://github.com/features/actions)                                                 |
| **Hosting**              | [Vercel](https://vercel.com/home)                                                                     |

## Developing

### Node Version

There is an `.nvmrc` file at the root of this repository which will inform [NVM](https://github.com/nvm-sh/nvm) of which Node version to load for this project. You can simply run (after installing NVM):

```bash
$ nvm use
```

### Local Development Server

Run the local development server view the entire website:

```bash
$ yarn start:next-dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### App Router

This application uses the latest version of Next.js (14.x) and the new [App Router](https://nextjs.org/docs/app). All website pages are organized within the `src/app` directory.

## Deploying

This website is deployed as a Next.js application using [Vercel](https://nextjs.org/docs/deployment). The connection to this repository is automated through GitHub authentication.

![vercel deployments](/src/images/vercel.png)

1. Pull requests create a staging environment for testing and validation. These environments are automatically linked to the pull request.
2. Upon merge to `main`, a deployment automatically triggers in the production environment.

The deployed production application is hosted at [matt.kharrl.com](https://alex.kharrl.com).

**Note:** Automatic rollbacks are triggerable in the Vercel UI.

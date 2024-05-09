# Alex Kharrl's Personal Website

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)![Next JS](https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white)![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=flat-square&logo=markdown&logoColor=white)![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat-square&logo=eslint&logoColor=white)![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=flat-square&logo=prettier&logoColor=F7BA3E)![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=flat-square&logo=yarn&logoColor=white)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=flat-square&logo=webpack&logoColor=black)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=flat-square&logo=babel&logoColor=black)![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=flat-square&logo=githubactions&logoColor=white)![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white)

![website opengraph image](/src/app/opengraph-image.png)

This is the code project behind my [personal website and professional portfolio](https://alex.kharrl.com/).

**Table of Contents**

- [Getting Started](#getting-started)
- [Managing Content](#managing-content)
- [Developing](#developing)
- [Deploying](#deploying)
- [Technology](#technology)

## Getting Started

To set up your development environment and start working on the project, follow these steps:

1. **Install Node.js:**

   - Download and install the latest LTS version of Node.js from [nodejs.org](https://nodejs.org/en/download).
   - This will also install `npm`, the Node.js package manager.

2. **Clone the Repository:**

   - In the terminal, navigate to the directory where you want to clone the project.
   - Run the following command, replacing `<repo-url>` with the URL of the repository:

     ```bash
     git clone https://github.com/colbenkharrl/alex-blog.git
     ```

3. **Open the Repository in Visual Studio Code:**

   - After cloning, open Visual Studio Code.
   - Click "File" > "Open Folder," and select the project's root folder.

     **Note:** You can [download Visual Studio Code here](https://code.visualstudio.com/download).

4. **Install Yarn:**

   - Yarn is an alternative package manager preferred for this project.
   - To install Yarn globally, open your terminal/command prompt and run:

     ```bash
     npm install -g yarn
     ```

   **Note:** You can toggle opening your terminal/command prompt directly within Visual Studio Code using the shortcut `` Ctrl + ` ``.

5. **Install Project Dependencies:**

   - In Visual Studio Code, open a new terminal (or use your system terminal).
   - Ensure the terminal is in the project's root folder.
   - Run the following command to install all project dependencies:

     ```bash
     yarn install
     ```

6. **Start the Development Server:**

   - With all dependencies installed, start the development server by running:

     ```bash
     yarn start
     ```

   - The development server will now be running, and the site should be accessible locally via [http://localhost:3000](http://localhost:3000).

Once everything is set up, you're ready to make content changes and preview them on your local environment.

## Managing Content

This guide explains where and how to add different types of content to this code repository so that it's rendered on the website. Follow these steps any time you want to update the website content:

1. [Preparing Your Working Bench](#1-preparing-your-working-branch)
2. [Managing Content](#2-managing-content)
3. [Committing Changes](#3-committing-changes)
4. [Creating a Pull Request](#4-creating-a-pull-request)

### 1. Preparing Your Working Branch

Before adding content, it's important to ensure you're on the `main` branch, have the latest changes, and a separate feature branch to work on:

1. **Open Visual Studio Code:** Make sure your project is open in Visual Studio Code.

2. **Access Source Control:** Click the "Source Control" icon in the Activity Bar on the left side (or use the keyboard shortcut `Ctrl + Shift + G` on Windows/Linux, `Cmd + Shift + G` on macOS).

3. **Check Out the `main` Branch:**

   - In the Status Bar at the bottom, verify the current branch by looking for the branch name (e.g., `main` or your feature branch).
   - If you're not on the `main` branch, click the branch name in the Status Bar to see the branch list, and select `main` to check it out.

4. **Pull Latest Changes:**

   - Click the "..." menu at the top of the Source Control panel.
   - Select "Pull" from the dropdown to ensure you have the latest changes from the `main` branch.
   - If prompted, enter your credentials or resolve conflicts if any occur.

5. **Create New Branch:**
   - Click the "..." menu again and select "Branch" > "Create Branch."
   - Enter a name for your new feature branch (e.g., `add-new-blog-post`).
   - Visual Studio Code will switch to this new branch automatically.

You're now ready to add content changes in your feature branch!

### 2. Managing Content

**Note:** The following sections explain how to add new content, but you are able to manage existing content using the same process.

#### Blog Posts

1. **Navigate:** Go to [`./src/app/blog/`](./src/app/blog/).
2. **Create a Folder:** Add a new folder named after your blog's unique slug (e.g., `my-first-blog`).
3. **Add Content:** In this new folder, create a file named `page.mdx` and write the content of your blog post using MDX syntax.
4. **Save Changes:** Save the `page.mdx` file.

**Note:** View an [example blog post here](./src/app/blog/example-blog/page.mdx) for reference, including how to add images.

#### Groups

1. **Open the File:** Locate and open [`./src/data/groups.ts`](./src/data/groups.ts).
2. **Update Array:** Add a new group object to the `groups` array with relevant information.
3. **Save Changes:** Save the updated file.

**Note:** [View the object type for groups here](./src/components/GridCard/index.tsx#L6).

#### Projects

1. **Open the File:** Locate and open [`./src/data/projects.ts`](./src/data/projects.ts).
2. **Update Array:** Add a new project object to the `projects` array.
3. **Save Changes:** Save the updated file.

**Note:** [View the object type for projects here](./src/components/GridCard/index.tsx#L6).

#### Recommendations

1. **Open the File:** Locate and open [`./src/data/recommendations.ts`](./src/data/recommendations.ts).
2. **Update Array:** Add a new recommendation object to the `recommendations` array.
3. **Save Changes:** Save the updated file.

**Note:** [View the object type for recommendations here](./src/data/recommendations.ts#L14).

#### Trips

1. **Open the File:** Locate and open [`./src/data/trips.ts`](./src/data/trips.ts).
2. **Update Array:** Add a new trip object to the `trips` array.
3. **Save Changes:** Save the updated file.

**Note:** [View the object type for trips here](./src/data/trips.ts#L10).

### 3. Committing Changes

1. **Open Visual Studio Code:** Make sure your project is open in Visual Studio Code.

2. **Access Source Control:** Click the "Source Control" icon in the Activity Bar on the left side (or use the keyboard shortcut `Ctrl + Shift + G` on Windows/Linux, `Cmd + Shift + G` on macOS) to open the Source Control panel.

3. **Stage Changes:**

   - All modified files will appear in the "Changes" section.
   - Click the "+" icon next to each file you want to stage, or click the "+" icon at the top of the section to stage all changes.

4. **Enter Commit Message:**

   - In the "Message" box above the "Changes" section, type a meaningful commit message describing the changes you made.

5. **Commit Changes:**

   - Click the checkmark icon above the message box to commit the changes.

6. **Push to GitHub:**
   - Click the "..." menu above the staged files and select "Push" to upload the committed changes to the remote repository.

**Note:** If this is your first time pushing changes, Visual Studio Code might ask you to sign in to GitHub and verify your permissions.

### 4. Creating a Pull Request

1. **Access GitHub:** Go to the [repository's page on GitHub](https://github.com/colbenkharrl/alex-blog).

2. **Navigate to Pull Requests:** Click on the ["Pull requests" tab](https://github.com/colbenkharrl/alex-blog/pulls) at the top of the repository page.

3. **Click "New Pull Request":** On the right side of the page, click the ["New pull request" button](https://github.com/colbenkharrl/alex-blog/compare).

4. **Select Branches:** Use the dropdown menus to select your working branch as the source and the main branch (or your intended target branch) as the base.

5. **Review Changes:** Verify that the changes shown match what you expect.

6. **Fill Details:** Provide a meaningful title and description for the pull request.

7. **Submit:** Click "Create pull request."

Your pull request will now be available for review and merging by the team!

## Developing

### Node Version

There is an `.nvmrc` file at the root of this repository which will inform [NVM](https://github.com/nvm-sh/nvm) of which Node version to load for this project. You can simply run (after installing NVM):

```bash
$ nvm use
```

### Local Development Server

Run the local development server view the entire website:

```bash
$ yarn start
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### App Router

This application uses the latest version of Next.js (14.x) and the new [App Router](https://nextjs.org/docs/app). All website pages are organized within the `src/app` directory.

## Deploying

This website is deployed as a Next.js application using [Vercel](https://nextjs.org/docs/deployment). The connection to this repository is automated through GitHub authentication.

1. Pull requests create a staging environment for testing and validation. These environments are automatically linked to the pull request.
2. Upon merge to `main`, a deployment automatically triggers in the production environment.

The deployed production application is hosted at [alex.kharrl.com](https://alex.kharrl.com).

**Note:** Automatic rollbacks are triggerable in the Vercel UI.

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

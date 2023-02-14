# Signin and SignUp with Next-Auth and more

This is a small project with a login system, with Next-Auth technology. At first the project started as just a login layout and was gaining proportions. The project consists of several strategies like custom Hook to validate text fields, organized folder structure and much more.

## Table of contents

- [Signin and SignUp with Next-Auth and more](#signin-and-signup-with-next-auth-and-more)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [System Requirements](#system-requirements)
    - [How to use](#how-to-use)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the optimal layout for the site, depending on the screen size of your device
- See all interactive elements on the page
- You can register
- If you are registered, you can then login
- See all the possible validation errors.

### System Requirements

- [Node.js 12.22.0 or later](https://nodejs.org)
- MacOS, Windows (including WSL), and Linux are supported

### How to use

Get the code by either cloning this repository using git

```
git clone https://github.com/smartinsdev/simple-system-signin-signup
```

... or [downloading source code](https://github.com/smartinsdev/simple-system-signin-signup/archive/refs/heads/main.zip) code as a zip archive.

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
or
yarn
```

Configure your local environment:

```
cp .env.local.example .env.local
```

Then start the example app with:

```
npm run dev
or
yarn dev
```

The app should now be up and running at http://localhost:3000 🚀

## My process

The project was started in order to learn even more about session strategies, tokens, text field validations, email and password. I found some difficulties in the beginning because I'm still getting to know the Next-Auth tool proposal.
The field validations I found the best way to do is to make a custom hook and this saves me time in the development.
All the functions and variables are typed with TypeScript.

I implemented redirect routes if the user doesn't have a session yet and also when the user does his registration he will be redirected to the login page.

The whole project was styled with Tailwindcss

### Built with

- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [Next-Auth](https://next-auth.js.org/) - Authentication for Next.js
- [Prisma](https://www.prisma.io/) - for ORM database
- [TypeScript](https://www.typescriptlang.org/) - For types
- [Tailwindcss](https://tailwindcss.com/) - For styles
- [Heroicons](https://heroicons.com/) - For Icons
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For Password encryption

### What I learned

- Developing a custom hook
- Text, email and password validations
- Session Strategies
- Tokens and cookies strategies
- Route Redirections
- Rest API
- Extending the types of Next-auth to customize

## Author

- Linkedin - [@martinssjunior](https://www.linkedin.com/in/martinssjunior/)
- Twitter - [@smartinsdev](https://www.twitter.com/smartinsdev)

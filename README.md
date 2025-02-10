[![Netlify Status](https://api.netlify.com/api/v1/badges/b2c82cde-7edb-4a49-a4c5-9272111018e8/deploy-status)](https://app.netlify.com/sites/ranakaya/deploys)
![Vercel Status](https://deploy-badge.vercel.app/vercel/ranakaya)

# Rana Kaya Portfolio/CV

Welcome to the Rana Kaya Portfolio project. This is a portfolio website showcasing Rana Kaya's work, skills, and contact information.
The website is designed by Rana in Figma, and built by me using Vite, React.js and TailwindCSS.
To visit the website go to:
https://gurkanozil.github.io/ranakaya or
https://ranakaya.vercel.app/ or
https://ranakaya.netlify.app/

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on both desktop and mobile devices.
- **Project Showcase**: A dedicated section to display various projects with descriptions, technologies used, and links to live demos and source code.
- **Skills Overview**: A section highlighting both soft and hard skills, as well as languages spoken.
- **Contact Form**: A simple contact form for inquiries.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Lucide Icons**: A set of open-source icons for React.
- **ESLint**: A tool for identifying and fixing problems in TypeScript code.
- **GitHub Actions**: For CI/CD and deployment to GitHub Pages.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/gurkanozil/ranakaya.git
   cd ranakaya
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the development server, use the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can view the project in your browser at `http://localhost:PORT`.

## Deployment

To deploy the project to GitHub Pages, follow these steps:

1. Build the project and verify everything looks good for production:
   ```bash
   npm run build && npm run preview
   ```

2. Push the changes to the `main` branch. The GitHub Actions workflow will automatically deploy the project to the `gh-pages` branch.

---

Thank you for visiting Rana's portfolio! I hope you enjoy exploring our work.

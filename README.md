# ContribHub

> **Discover meaningful open-source contribution opportunities, programs, and community projects.**

ContribHub is a modern open-source contribution platform built to help developers and newcomers discover open-source programs, participating organizations, categories, and beginner-friendly issues.

---

## ✨ Features

- **Program Discovery**: Browse top open-source programs and fellowships (e.g. GSoC, LFX, Outreachy, NSoC).
- **Organization Directory**: Explore active open-source organizations and project ecosystems.
- **Categorized Opportunities**: Filter issues and projects by language, domain, and experience level.
- **Contributor Resources**: Guides, tips, and roadmaps to help developers make their first pull request.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **Library**: [React](https://react.dev/) 19
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
ContribHub/
├── app/
│   ├── src/
│   │   └── components/
│   │       └── UI/              # Reusable UI components (Navbar, Cards, Button, Quote)
│   ├── favicon.ico
│   ├── globals.css              # Global styles and theme definitions
│   ├── layout.tsx               # Root layout and metadata
│   └── page.tsx                 # Main landing page
├── public/                      # Static assets and icons
├── package.json                 # Scripts and dependencies
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: v18.17 or higher
- **npm**: v9 or higher (or `pnpm` / `yarn`)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aniket866/ContribHub.git
   cd ContribHub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Compiles and builds the production application.
- `npm run start`: Runs the built production server.
- `npm run lint`: Checks code quality and syntax with ESLint.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests to help improve ContribHub.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

# Contributing to ContribHub

Thank you for your interest in contributing to **ContribHub**! ContribHub is an open-source platform designed to help developers find and participate in open-source programs and community projects.

---

## Code of Conduct

We are dedicated to providing a welcoming, inclusive, and harassment-free experience for everyone.
- Be respectful, constructive, and kind in all communications.
- Welcome newcomers and encourage diverse perspectives.
- Adhere to community standards across issues, pull requests, and discussions.

---

## Getting Started

### Prerequisites

- **Node.js** (v18.17 or higher)
- **npm** (v9 or higher) or compatible package manager
- **Git**

### Fork & Clone

1. Fork the repository on GitHub: [aniket866/ContribHub](https://github.com/aniket866/ContribHub)
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/ContribHub.git
   cd ContribHub
   ```
3. Set the upstream remote:
   ```bash
   git remote add upstream https://github.com/aniket866/ContribHub.git
   git fetch upstream
   ```

### Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

---

## Development Workflow

### Branch Naming Conventions

Create a new branch from `main` with an appropriate prefix:
- `feat/<feature-name>`: New features or UI components
- `fix/<bug-name>`: Bug fixes and corrections
- `docs/<doc-topic>`: Documentation updates
- `refactor/<topic>`: Code refactoring without UI/behavior changes

```bash
git checkout -b feat/your-feature
```

### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Formatting, whitespace, or missing semicolon changes
- `refactor:` Code changes that neither fix a bug nor add a feature
- `chore:` Dependency or tooling updates

Example:
```bash
git commit -m "feat(ui): add mobile navigation menu dropdown (#1)"
```

### Submitting a Pull Request

1. Ensure the code passes linting without errors:
   ```bash
   npm run lint
   ```
2. Push your branch to your GitHub fork:
   ```bash
   git push -u origin feat/your-feature
   ```
3. Open a Pull Request against the `main` branch of `aniket866/ContribHub`.
4. Provide a clear PR title and description referencing the issue (e.g. `Closes #123`).

---

## Code Style & Standards

- **TypeScript**: Ensure all new files and components have strict typing.
- **Tailwind CSS**: Follow mobile-first utility classes and adhere to the project's monochrome theme.
- **Components**: Place reusable UI components under `app/src/components/UI/`.

Thank you for contributing to ContribHub!

# Contributing Guide

Thank you for your interest in this template! Here’s how to contribute.

## For Template Users

### 1. **Create a New Repository from this Template**
   - On GitHub, click **"Use this template"** → **"Create a new repository"**
   - Choose a name for your project
   - Clone the new repository

### 2. **Initial Setup**
   ```bash
   npm install
   cp .env.example .env
   # Update the variables in .env
   ```

### 3. **Start Development**
   ```bash
   npm run start:dev
   ```

### 4. **Customize for Your Project**
   - Update `package.json` (name, description, author)
   - Edit the `README.md` for your project
   - Adapt the module structure as needed
   - Change the JWT secrets in `.env`

## For Template Contributors

### Reporting Bugs
- Create an issue with the `bug` label
- Describe the observed and expected behavior
- Include steps to reproduce

### Proposing Enhancements
- Create an issue with the `enhancement` label
- Explain your proposal
- Wait for feedback before starting development

### Pull Requests
1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## Standards

- Use strict TypeScript
- Follow the project’s ESLint conventions
- Write tests for new features
- Document changes in the README if necessary

## Questions?

Contact the template maintainers.

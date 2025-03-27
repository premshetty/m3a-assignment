# m3a-assignment

## Project Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v20.8.0 or later)
- **npm** (v7 or later)

### Installation
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd m3a-assignment
    ```

2. Install the dependencies using `--legacy-peer-deps` to bypass peer dependency conflicts:
    ```bash
    npm install --legacy-peer-deps
    ```

### Available Scripts

- **Start Development Server**
    ```bash
    npm run dev
    ```
    This will run the Vite development server at `http://localhost:5173`.

- **Build for Production**
    ```bash
    npm run build
    ```
    This will generate the production build in the `dist` directory.

- **Preview Production Build**
    ```bash
    npm run preview
    ```
    Preview the build locally using Vite's preview server.

- **Lint the Code**
    ```bash
    npm run lint
    ```
    Run ESLint to check for code style issues.

### Troubleshooting
- If you encounter any dependency errors during installation, ensure you are using the correct Node.js and npm versions.
- Use the `--legacy-peer-deps` flag only when necessary to resolve conflicts.
- Clear cache if issues persist:
    ```bash
    npm cache clean --force
    ```

### Additional Notes
- The project uses **React 19** with **TailwindCSS** and **Ant Design**.
- React Flow is used for rendering interactive diagrams.
- ESLint is set up for code quality checks.

For further assistance, check the documentation of the respective libraries or raise an issue in the repository.


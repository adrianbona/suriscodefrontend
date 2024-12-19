# SurisCodeFrontend 🖥️

## Project Overview 📊
SurisCodeFrontend is the frontend application for managing purchase orders, built with a modern tech stack to provide a seamless user experience. The project leverages React for building the user interface, Material-UI for component styling, and Axios for efficient communication with the backend.

Key Features 🔑
- **Vendor Selection**: Dropdown menus for choosing vendors.
- **Item Selection**: Interactive checkboxes to select multiple items.
- **Informational modals**: Display success or error messages.
- **Responsive Design**: Optimized for all screen sizes with a clean, centered layout.

---

## Technologies Used ⚙️
- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular UI component library for styling and design.
- **Axios**: A promise-based HTTP client for interacting with REST APIs.

---

## Prerequisites 🔧
- **Git**: Version control system for tracking changes in the codebase.
- **Node.js**: Version 16 or higher.
- **npm** or **yarn**: Package manager for installing dependencies.

---

## Installation & Setup 🚀

1. Clone this repository:
   ```bash
   git clone https://github.com/adrianbona/suriscodefrontend.git
   cd SurisCodeFrontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

## Features

### Core Functionalities ⚡
1. **Vendor Selection:**
   - A dropdown menu populated with a list of vendors fetched from the API.
2. **Item Selection:**
   - Checkboxes to select multiple items, with validation to ensure proper selection.
3. **Order Management:**
   - A submit button that shows a loading spinner while processing the request.
   - Informational modal displayed upon completion of the action.
4. **Item Validation:**
   - Items must meet certain criteria:
     - Price greater than zero (with exceptions for certain items like pillows).
     - Descriptions must not contain special characters.
     - Filtering by a specific warehouse.

---

## Available Scripts 🛠️

- `npm start`: Starts the development server.
- `npm test`: Runs tests (if any).
- `npm run build`: Creates an optimized production build.

---

## Important Notes 📋

1. **Backend Integration:**
   - This frontend is configured to use Axios with the base URL set to: `http://localhost:7288`.
   - Ensure that the backend is running before starting this project.

2. **Styling and Layout:**
   - Uses **Material-UI** with customized styles for specific components.
   - Includes centered elements, rounded borders, and visual effects such as shadows and gradients.

3. **Axios Configuration:**
   - The `client.js` file contains the Axios configuration, including the base URL and default headers.

---

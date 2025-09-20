# 🧑‍💻 Freelancing App Project

A web platform where employers can post projects, freelancers can take them on, and all tasks are managed through a simple workflow.

## Table of Contents

- [Features](#features)
- [Packages](#packages)
- [Project Structure](#project-structure)
- [Acknowledgements](#acknowledgements)
- [Contact Information](#contact-information)

## Features

- **Fully responsive design styled with Tailwind CSS**
- **Built with a real backend API**
- **Phone number and OTP-based authentication**
- **Role-based authorization (Admin, Owner, Freelancer)**
- **Form validation using React Hook Form**
- **Data fetching handled with React Query**

## Packages

Key packages used in this project:

- **headlessui/react**: Accessible, unstyled components for custom UI design.
- **tanstack/react-query**: Manages server-side data with caching and synchronization.
- **axios**: HTTP client for making API requests.
- **query-string**: Parses and stringifies URL query strings.
- **react-hook-form**: Manages form state and validation with React Hooks.
- **react-hot-toast**: Customizable toast notifications for React.
- **react-icons**: Collection of popular icons for React projects.
- **react-loader-spinner**: Loading spinners for data-fetching states.
- **react-multi-date-picker**: Select multiple dates with a customizable date picker.
- **react-otp-input**: Customizable input for OTP (One-Time Password) fields.
- **react-router-dom**: Routing and navigation for React applications.
- **react-tag-input-component**: Tag input component for managing multiple tags.

## Project Structure
 
  ```bash
project-root/
│
├── public/           # Public assets available directly
│ ├── Fonts/          # Custom fonts used in the project
│ └── Images/         # Static images and icons
│
├── src/              # Main source code
│ ├── Contexts/       # React context providers for global state
│ ├── Features/       # Components representing the project's main features
│ ├── Hooks/          # Custom React hooks
│ ├── Pages/          # Different pages/routes in the application
│ ├── Services/       # API & data fetching logic
│ ├── UI/             # Shared UI elements (buttons, inputs, modals, etc.)
│ ├── Utils/          # Utility/helper functions
│ ├── App.jsx         # Root component that defines the app structure
│ ├── index.css       # Global stylesheet for the application
│ └── main.jsx        # Application entry point that renders the root component
│
└── README.md         # Project documentation

```

## Acknowledgements

Special thanks to [Saheb Mohammadi](https://github.com/sahebmohammadi) for developing the backend of this project.

## Contact Information

For any questions or feedback, please reach out at [ghasemi84mahdi@gmail.com](mailto:ghasemi84mahdi@gmail.com).

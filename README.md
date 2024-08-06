# Tic-Tac-Toe Game

## Overview

This project is a classic Tic-Tac-Toe game built using modern web technologies. The game features a clean and appealing design, leveraging React, JavaScript, and SWC for optimal performance. It also utilizes localStorage to persist game state, ensuring a smooth user experience.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces, particularly single-page applications.
- **JavaScript**: The core language used for scripting the game logic.
- **SWC**: A JavaScript/TypeScript compiler that enhances performance and speeds up development.
- **Vite**: A next-generation build tool that provides a fast development experience and optimized build performance.
- **localStorage**: Web storage API used to persist game state between sessions.

## Features

- **Persistent Game State**: Utilizes `localStorage` to save the current state of the game, allowing users to continue their game where they left off.
- **Responsive Design**: The game is designed to be responsive, ensuring a smooth experience on both desktop and mobile devices.
- **User-Friendly Interface**: Intuitive and visually appealing design with clear indicators for player moves and game outcomes.
- **Game Logic**: Implements the classic rules of Tic-Tac-Toe, including win conditions, draw conditions, and turn-based gameplay.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed:
- **Node.js**: Required for running the development server and managing dependencies.
- **npm or yarn**: Package managers for installing project dependencies.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git

   cd tic-tac-toe

   npm install

   npm run dev

## Running the Application

The application will be running at `http://localhost:3000` (or another port if specified).

## Project Structure

The project is organized as follows:

- **`src/`**: Contains the main source code.
  - **`components/`**: React components for the game interface.
  - **`styles/`**: CSS files for styling the components.
  - **`utils/`**: Utility functions and helpers.
  - **`App.js`**: The main application component.
- **`public/`**: Contains static assets and the HTML template.
- **`package.json`**: Defines project dependencies and scripts.
- **`vite.config.js`**: Configuration file for Vite.

## Game Rules

- **Objective**: The objective is to align three of your symbols (X or O) in a row, column, or diagonal.
- **Players**: The game is played between two players, alternating turns.
- **Winning**: The first player to achieve three aligned symbols wins the game.
- **Draw**: If all spaces are filled without a winning combination, the game ends in a draw.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React**: For its powerful UI framework.
- **Vite**: For providing a fast and modern development experience.
- **SWC**: For enhancing build performance.



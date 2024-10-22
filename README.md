# Chatbot React App

Chatbot React App is a simple chatbot application built using React. The app allows users to send messages and receive responses from the bot. This app is styled using Tailwind CSS and includes a typing indicator for a better user experience.

## Demo

You can see a live demo of the project [here](https://mouraleonardo.com/chatbotreactapp/).

## Features

- User-friendly interface for chatting
- Message sending functionality
- Typing indicator for bot responses
- Responsive design with Tailwind CSS

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: For making HTTP requests (if needed).
- **Heroicons**: For vector icons.
- **Headless UI**: For unstyled, accessible UI components.

## Installation

To set up the Chatbot React App locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/mouraleonardo/react-chatbot-app.git>
   cd chatbot-react-app
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   Your application should be running on [http://localhost:3000](http://localhost:3000).

## Usage

Once the app is running, you can:

1. Type your message into the input field.
2. Press **Enter** or click the **Send** button (represented by a paper airplane icon) to send your message.
3. The bot will respond with an echoed message after a short delay, simulating typing.

## Project Structure

```
src/
├── components/
│   └── Chatbot.js
├── index.js
├── App.js
├── index.css
├── tailwind.config.js
└── .gitignore
```

- **src/components/Chatbot.js**: Contains the main functionality and UI for the chatbot.
- **index.js**: The entry point for the React application.
- **App.js**: The main app component.
- **index.css**: Global styles for the app.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **postcss.config.js**: Configuration file for PostCSS.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [Headless UI](https://headlessui.dev/)
- [Axios](https://axios-http.com/)

## Contribution

Feel free to contribute to this project! Open issues or submit pull requests for any improvements or bug fixes.

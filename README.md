
# URL Blocker Browser Extension with Server

URL Blocker Browser Extension with Server is a powerful tool that allows users to block specific URLs from loading in the browser. It also comes with a server component that stores the list of blocked URLs, ensuring synchronization across multiple instances of the browser extension.

- Block specific URLs from loading in the browser.
- Unblock previously blocked URLs.
- Synchronize blocked URLs across multiple browser instances using a server.

## Features

- Easy-to-use browser extension with a user-friendly popup interface.
- Centralized server for storing and synchronizing the list of blocked URLs.
- Seamless blocking and unblocking of URLs without page reloads.

## How it Works

The project consists of two main components: the browser extension (client-side) and the server (server-side).

### Browser Extension (Client-Side)

The browser extension adds a popup interface that allows users to input URLs they wish to block or unblock. It communicates with the server to update the list of blocked URLs and uses the Chromium WebRequest API to intercept and block requests to the specified URLs.

### Server (Server-Side)

The https server, built with Node.js and Express, receives blocklist data from the browser extension and stores it in a JSON file. It provides an API endpoint for the client to update the blocklist, ensuring consistency across different browser instances.

## Installation and Usage

### Prerequisites

- Google Chrome Browser (or any Chromium-based browser).
- Node.js (for the server-side).

### Browser Extension

1. Clone the repository to your local machine.
2. Open your Chromium-based browser and navigate to `chrome://extensions/`.
3. Enable Developer mode (toggle on the top right).
4. Click "Load unpacked" and select the `src` folder from the cloned repository.

### Server

1. Install the required dependencies for the server-side:
    ```bash
    cd server
    npm install
2. Generate self-signed SSL certificates for local HTTPS server. Replace server.key and server.crt in the server directory with your generated SSL certificate files.
3. Start the server:
    ```bash
    npm start

The server will be running on https://localhost:443.

### Usage

1. Click on the extension icon to open the popup.
2. Enter the URL you want to block in the "Block URL" input field and click "Block."
3. To unblock a URL, enter the URL in the "Unblock URL" input field and click "Unblock."

Blocked URLs will be synchronized across multiple browser instances using the server.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, please open an issue or submit a pull request.

## Acknowledgments

Special thanks to QNU Labs for providing the internship opportunity and support during the development of this project. Their guidance and resources have been invaluable in making this project a reality.

This project utilizes the following technologies and libraries:

- Node.js
- Express.js
- Google Chrome Extension API
- Chromium WebRequest API
- Self-Signed SSL Certificates for Development



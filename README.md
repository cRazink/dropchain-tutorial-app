## How to Set Up Your Own Dev Environment using dropchain-tutorial-app

This guide will walk you through the steps to set up your own development environment using the `dropchain-tutorial-app` as a starting point. Make sure you have `node.js` and `npm` installed on your machine before proceeding.

### Prerequisites:

- **Node.js and npm**: Ensure you have Node.js and npm installed on your machine. If not, you can download and install them from [Node.js official website](https://nodejs.org/). Once installed, you can verify the installation by running the following commands in your terminal:
  ```bash
  node -v
  npm -v

### 1. **Clone the Repository:**
   - Clone the `dropchain-tutorial-app` repository from GitHub to your local machine using the following command:
     ```bash
     git clone https://github.com/cRazink/dropchain-tutorial-app.git
     ```

### 2. **Navigate to the Project Directory:**
   - Change your directory to the `dropchain-tutorial-app` folder:
     ```bash
     cd dropchain-tutorial-app
     ```

### 3. **Install Dependencies:**
   - Install the necessary dependencies using `npm`:
     ```bash
     npm install
     ```

### 4. **Frontend Setup:**
   - Start the frontend development server:
     ```bash
     npm run dev
     ```
   - Now, navigate to `http://localhost:3000/name-of-pages-file` in your web browser to view the pages. Replace `name-of-pages-file` with the name of the page file you are interested in, for example: `http://localhost:3000/asset-mint`.
   - Update the 'body' object fields within the `sendRequest` function in the relevant page file(s) located in the `/pages` directory. You can obtain values like `app_id` or `user1_uid` from your DropChain Developer Console (https://console.dropchain.network/).

### 5. **Backend Setup:**
   - Navigate to the `/backend` directory:
     ```bash
     cd backend
     ```
   - Update the `X-API-Key` field within the `handleApiRequest` function in `server.js` (for JavaScript backend) or `server.py` (for Python backend) with your API key from the DropChain Developer Console.

   #### For JavaScript Backend:
   - Run the backend server:
     ```bash
     node server.js
     ```
   #### For Python Backend:
   - Install the necessary Python dependencies:
     ```bash
     pip3 install flask flask_cors requests
     ```
   - Run the backend server:
     ```bash
     python3 server.py
     ```

### 6. **Restarting the Backend:**
   - If you make any changes to `server.js` or `server.py`, you'll need to stop the backend server (Ctrl + C), and restart it using the relevant command from step 5.

### 7. **Developing Your App:**
   - With both the frontend and backend servers running, you're now set up to develop your web3 app with DropChain. Make changes to the frontend in the `/pages` and `/app` directories, and to the backend in the `/backend` directory, and see your changes in real time.

### 8. **Further Reading:**
   - For more detailed information and advanced configurations, check out the DropChain Documentation here: https://dropchain.gitbook.io/dropchain-api-beta/

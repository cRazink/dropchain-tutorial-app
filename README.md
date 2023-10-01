## dropchain-tutorial-app
This app shows you how to build a web3 app with DropChain. This next.js app provides a premade frontend and backend to get you started fast.

## How to get started:
This app has a React frontend and a Node backed.

# Frontend setup:
Move to the projects home directory and start your frontend with 'npm run dev'.

For each of the pages within /pages/, go to 'http://localhost:3000/name-of-pages-file'. For example, if you want to try minting an asset, go to 'http://localhost:3000/asset-mint'. You should see a basic header with a button rendered for each page.

Then, within '/pages/asset-mint', modify the 'body' object fields within the 'sendRequest' function. These include values like app_id or user1_uid, taken from your DropChain Developer Console (https://console.dropchain.network/).

# Backend setup:

**Javascript server.js:**

In another terminal, open up the project's /backend/server.js file. 

From your DropChain Developer Console (https://console.dropchain.network/), create an API Key and paste it into the "X-API-Key" field within the handleApiRequest function (line 115). 

**NOTE**: For production environments, you should use an environment variable. For educational purposes, we will be hardcoding this API Key. 

Then, run your backend server.js with the command 'node server.js' from the /backend/ directory.

Keep in mind, you need to stop and restart the backend server every time you make changes to server.js in order for it to take effect. 

**Python server.py:**

Install necessary dependencies (pip3 install flask flask_cors requests), and then run 'python3 server.py' to start the server. The same logic applies for editting your API Key.


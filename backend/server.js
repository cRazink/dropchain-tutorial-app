const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
let fetch;
import('node-fetch').then(module => {
    fetch = module.default;
});

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // for local testing
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.post('/v1/asset_mint_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/asset_mint_testnet'));
app.post('/v1/asset_optin_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/asset_optin_testnet'));
app.post('/v1/send_asset_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/send_asset_testnet'));
app.post('/v1/asset_indexer_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/asset_indexer_testnet'));
app.post('/v1/asset_indexer_lookup_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/asset_indexer_lookup_testnet'));
app.post('/v1/get_transaction_info_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/get_transaction_info_testnet'));
app.post('/v1/get_note_from_txid_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/get_note_from_txid_testnet'));
app.post('/v1/freeze_asset_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/freeze_asset_testnet'));
app.post('/v1/unfreeze_asset_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/unfreeze_asset_testnet'));
app.post('/v1/clawback_asset_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/clawback_asset_testnet'));
app.post('/v1/atomic_swap_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/atomic_swap_testnet'));
app.post('/v1/create_asset_metadata', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/create_asset_metadata'));
app.post('/v1/get_asset_info_testnet', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/get_asset_info_testnet'));
app.post('/v1/get_metadata_from_hash', (req, res) => handleApiRequest(req, res, 'https://api.dropchain.network/v1/get_metadata_from_hash'));


// Helper function to handle API requests
async function handleApiRequest(req, res, url) {
    try {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-API-Key': '<Your API Key>', // your API key should only exist on your backend server. We will hard code this in plaintext because we are building a test environment, but I recommend using environment variables if deploying into a production environment
            },
            body: JSON.stringify(req.body),
        };

        const response = await fetch(url, options);
        const result = await response.json();
        res.status(response.status).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
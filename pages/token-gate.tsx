import RootLayout from '../app/layout';
import { TokenGateYourAppCode } from '@/devlink/TokenGateYourAppCode';
import React, { useState } from 'react';

export default function TokenGateYourAppCodePage() {
  const [outputText, setOutputText] = useState('');
  const token_gate_asset_id = 0;  // Define the asset ID you want to gate

  const sendRequest = async () => {
    setOutputText('DropChain API request sent, processing...');

    const url = '/v1/asset_indexer_lookup_testnet'; 
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        app_id: '',
        receiver1_uid: '', // the user who's assets we are trying to look at
        session1_token: '',
        user1_uid: '' // the requesting user
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();  // Parse JSON directly
      console.log(result);
      let updatedOutputText = JSON.stringify(result, null, 2);  // Pretty print the result

      // Check the conditions and append the necessary text
      const assetObj = result.data.receiver1_assets.find(asset => asset['asset-id'] === token_gate_asset_id);
      if (!assetObj || assetObj.amount === 0) {
        updatedOutputText += '\n\nOutcome:\nThis user is not allowed!';
      } else if (assetObj.amount > 0) {
        updatedOutputText += '\n\nOutcome:\nThis user has the necessary tokens to enter!';
      }

      setOutputText(updatedOutputText);  // Update the state
    } catch (error: any) {
      console.error(error);
      setOutputText('Error: ' + error.message);
    }
  };
    
  return (
    <RootLayout>
      <TokenGateYourAppCode 
        sendRequest={{onClick: sendRequest}}
        output={
          outputText ? <pre style={{ whiteSpace: 'pre-wrap' }}>{outputText}</pre> : null
        }
        />
    </RootLayout>
  );
}
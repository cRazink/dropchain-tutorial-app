import React, { useState } from 'react';
import RootLayout from '../app/layout';
import { MintingAnNftOrTokenCode } from '@/devlink/MintingAnNftOrTokenCode';

export default function MintingAnNftOrTokenCodePage() {
  const [outputText, setOutputText] = useState('');

  const sendRequest = async () => {
    setOutputText('DropChain API request sent, processing...');

    const url = '/v1/asset_mint_testnet'; 
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        app_id: '',
        created_asset_amount_int: '',
        created_asset_decimals: '',
        created_asset_metadata_hash: '',
        created_asset_name: '',
        created_asset_unit_name: '',
        created_asset_url: '',
        session1_token: '',
        user1_uid: ''
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setOutputText(JSON.stringify(JSON.parse(result), null, 2));  // Updated line
    } catch (error: any) {
      console.error(error);
      setOutputText('Error: ' + error.message);
    }
  };

  return (
    <RootLayout>
      <MintingAnNftOrTokenCode 
        sendRequest={{onClick: sendRequest}}
        outputText={
          outputText ? <pre style={{ whiteSpace: 'pre-wrap' }}>{outputText}</pre> : null
        }
      />
    </RootLayout>
  );
}


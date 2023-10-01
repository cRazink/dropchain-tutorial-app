import RootLayout from '../app/layout';
import { HowToSendATokenNftCode } from '@/devlink/HowToSendATokenNftCode';
import React, { useState } from 'react';

export default function HowToSendATokenNftCodePage() {
  const [outputText, setOutputText] = useState('');

  const sendRequest = async () => {
    setOutputText('DropChain API request sent, processing...');

    const url = '/v1/send_asset_testnet'; 
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        app_id: '',
        asset1_amount_int: '',
        asset1_id: '',
        receiver1_uid: '',
        session1_token: '',
        transaction1_note: '',
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
      <HowToSendATokenNftCode 
        sendRequest={{onClick: sendRequest}}
        output={
          outputText ? <pre style={{ whiteSpace: 'pre-wrap' }}>{outputText}</pre> : null
        }
      />
    </RootLayout>
  );
}
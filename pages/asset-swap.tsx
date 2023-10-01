import RootLayout from '../app/layout';
import { SwapTokensNfTsCode } from '@/devlink/SwapTokensNfTsCode';
import React, { useState } from 'react';

export default function SwapTokensNfTsCodePage() {
  const [outputText, setOutputText] = useState('');

  const sendRequest = async () => {
    setOutputText('DropChain API request sent, processing...');

    const url = '/v1/atomic_swap_testnet'; 
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        app_id: '',
        asset1_amount_int: '',
        asset1_id: '',
        asset2_amount_int: '',
        asset2_id: '',
        receiver1_uid: '',
        receiver2_uid: '',
        session1_token: '',
        session2_token: '',
        transaction1_note: '',
        transaction2_note: '',
        user1_uid: '',
        user2_uid: ''
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
      <SwapTokensNfTsCode
        sendRequest={{onClick: sendRequest}}
        output={
          outputText ? <pre style={{ whiteSpace: 'pre-wrap' }}>{outputText}</pre> : null
        }
        />
    </RootLayout>
  );
}
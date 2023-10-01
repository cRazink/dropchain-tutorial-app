import RootLayout from '../app/layout';
import { GetTheNoteFromATransactionIdCode } from '@/devlink/GetTheNoteFromATransactionIdCode';
import React, { useState } from 'react';

export default function GetTheNoteFromATransactionIdCodePage() {
  const [outputText, setOutputText] = useState('');

  const sendRequest = async () => {
    setOutputText('DropChain API request sent, processing...');

    const url = '/v1/get_note_from_txid_testnet'; 
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        app_id: '',
        session1_token: '',
        transaction1_id: '',
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
      <GetTheNoteFromATransactionIdCode 
        sendRequest={{onClick: sendRequest}}
        output={
          outputText ? <pre style={{ whiteSpace: 'pre-wrap' }}>{outputText}</pre> : null
        }
        />
    </RootLayout>
  );
}
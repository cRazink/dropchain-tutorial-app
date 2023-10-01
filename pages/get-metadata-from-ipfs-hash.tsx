import RootLayout from '../app/layout';
import { GrabMetadataFromAnIpfsMetadataHashCode } from '@/devlink/GrabMetadataFromAnIpfsMetadataHashCode';
import React, { useState } from 'react';

export default function GrabMetadataFromAnIpfsMetadataHashCodePage() {
  const [outputText, setOutputText] = useState('');

  const sendRequest = async () => {
    setOutputText('DropChain API request sent, processing...');

    const url = '/v1/get_metadata_from_hash'; 
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        app_id: '',
        asset_metadata_hash: '',
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
      <GrabMetadataFromAnIpfsMetadataHashCode
        sendRequest={{onClick: sendRequest}}
        ouput={
          outputText ? <pre style={{ whiteSpace: 'pre-wrap' }}>{outputText}</pre> : null
        }
        />
    </RootLayout>
  );
}
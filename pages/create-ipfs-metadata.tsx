import RootLayout from '../app/layout';
import { CreateTokenNftMetadataOnIpfsCode } from '@/devlink/CreateTokenNftMetadataOnIpfsCode';
import React, { useState } from 'react';

export default function CreateTokenNftMetadataOnIpfsCodePage() {
  const [outputText, setOutputText] = useState('');

  const sendRequest = async () => {
    setOutputText('DropChain API request sent, processing...');

    const url = '/v1/create_asset_metadata'; 
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        app_id: '',
        asset_metadata_description: '',
        asset_metadata_external_url: '',
        asset_metadata_has_traits: true,
        asset_metadata_image_url: '',
        asset_metadata_name: '',
        asset_metadata_trait_type1: '',
        asset_metadata_trait_type2: '',
        asset_metadata_trait_type3: '',
        asset_metadata_trait_type4: '',
        asset_metadata_trait_type5: '',
        asset_metadata_trait_type6: '',
        asset_metadata_trait_type7: '',
        asset_metadata_trait_type8: '',
        asset_metadata_value1: '',
        asset_metadata_value2: '',
        asset_metadata_value3: '',
        asset_metadata_value4: '',
        asset_metadata_value5: '',
        asset_metadata_value6: '',
        asset_metadata_value7: '',
        asset_metadata_value8: '',
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
      <CreateTokenNftMetadataOnIpfsCode
        sendRequest={{onClick: sendRequest}}
        ouput={
          outputText ? <pre style={{ whiteSpace: 'pre-wrap' }}>{outputText}</pre> : null
        }
        />
    </RootLayout>
  );
}
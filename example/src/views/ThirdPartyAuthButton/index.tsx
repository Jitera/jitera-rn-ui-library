import React, { useState } from 'react';
import { ThirdPartyAuthButton, ThirdPartyAuthProvider, GoogleAuthResult, FacebookAuthResult } from '@jitera/jitera-rn-ui-library'

import BaseLayout from '~/layouts/Base'

const ThirdPartyAuthenticationViews: React.FC = () => {
  const [googleAuthResult, setGoogleAuthResult] = useState<GoogleAuthResult>()
  const [facebookAuthResult, setFacebookAuthResult] = useState<FacebookAuthResult>()

  return (
    <BaseLayout>
      <ThirdPartyAuthButton
        style={{marginBottom: 30}}
        type={ThirdPartyAuthProvider.GOOGLE}
        config={{
          expoClientId: '1e1f13dc-ae37-4e04-b7d3-12b0d7b081fb',
          webClientId: '570449558481-bv28knmv01pih48vud3gg2a3qmir7tn7.apps.googleusercontent.com',
          androidClientId: '570449558481-j09h92h6a0fuct497kcujpc140kvpfrb.apps.googleusercontent.com',
          iosClientId: '570449558481-8ilmdbjjtgil9k80mnff023rsnsaigih.apps.googleusercontent.com'
        }}
        errorMessage={
          ["cancel", "dismiss", "locked", "error"]
            .includes(googleAuthResult?.authentication?.type as string) && 'Login Failed'
        }
        value={googleAuthResult}
        onChange={(response) => {
          setGoogleAuthResult(response as GoogleAuthResult)
          console.log(response)
        }}
      />
      <ThirdPartyAuthButton
        type={ThirdPartyAuthProvider.FACEBOOK}
        config={{
          expoClientId: '537504197710261',
          webClientId: '537504197710261',
          androidClientId: '537504197710261',
          iosClientId: '537504197710261'
        }}
        errorMessage={
          ["cancel", "dismiss", "locked", "error"]
            .includes(facebookAuthResult?.authentication?.type as string) && 'Login Failed'
        }
        value={facebookAuthResult}
        onChange={(response) => {
          setFacebookAuthResult(response as FacebookAuthResult)
          console.log(response)
        }}
      />
    </BaseLayout>
  )
}

export default ThirdPartyAuthenticationViews

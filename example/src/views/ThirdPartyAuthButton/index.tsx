import React from 'react'
import { ThirdPartyAuthButton, ThirdPartyAuthProvider } from '@jitera/jitera-rn-ui-library'

import BaseLayout from '~/layouts/Base'

const ThirdPartyAuthenticationViews: React.FC = () => {
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
        onChange={(response) => {
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
        onChange={(response) => {
          console.log(response)
        }}
      />
    </BaseLayout>
  )
}

export default ThirdPartyAuthenticationViews

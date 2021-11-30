import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PlasmicRootProvider } from "@plasmicapp/react-web"
import { EmailProvider } from 'contexts/Email'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider>
      <EmailProvider>
        <Component {...pageProps} />
      </EmailProvider>
    </PlasmicRootProvider>
  )
}
export default MyApp

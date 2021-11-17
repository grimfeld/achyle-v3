import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PlasmicRootProvider } from "@plasmicapp/react-web"

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  )
}
export default MyApp

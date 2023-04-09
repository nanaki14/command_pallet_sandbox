import '@/styles/style.css'
import type { AppProps } from 'next/app'
import { AppLayout } from '@/components/shared/AppLayout'
import { AppHead } from '@/components/utils/AppHead'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <AppHead />
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp

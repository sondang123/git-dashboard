import type { LinksFunction } from '@remix-run/cloudflare'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { ConfigProvider } from 'antd'
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from '@ant-design/cssinjs'
import './tailwind.css'

import StyledComponentsRegistry from './provider/antd-registry'
import { ClientOnly } from './provider/client-only'
import { DefaultLayout } from './layout/default-layout'
import QueryProvider from './provider/query-provider'
import { AppToast } from './component/app-component/app-toast'

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="overflow-x-hidden">
        {children}
        <AppToast />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <StyledComponentsRegistry>
      <ClientOnly>
        <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
          <ConfigProvider>
            <QueryProvider>
              <DefaultLayout>
                <Outlet />
              </DefaultLayout>
            </QueryProvider>
          </ConfigProvider>
        </StyleProvider>
      </ClientOnly>
    </StyledComponentsRegistry>
  )
}

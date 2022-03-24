// Dependencies
import type * as React from 'react'
import type { AppProps } from 'next/app'
import type { Router } from 'next/router'
import type {
  NextComponentType,
  NextLayoutComponentType,
  NextLayoutPage,
  NextPageContext,
} from 'next'

declare module 'next' {
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
  }

  type NextLayoutPage<P = {}, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
  }
}

declare module 'next/app' {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType
    pageProps: P
  }
}

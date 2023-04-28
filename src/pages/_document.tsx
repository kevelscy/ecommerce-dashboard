import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>
        <meta name='robots' content='index' />
        <meta charSet='UTF-8' />
        <meta name='description' content='Dashboard - Devels Technology' />
        <meta name='keywords' content='Devels Technology, Devels, Dashboard, Template' />
        <meta name='author' content='Devels Technology' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

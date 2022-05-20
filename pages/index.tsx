import type { NextPage } from 'next'
import Head from 'next/head'
import { lightTheme } from '../lib/light'
import { darkTheme } from '../lib/dark'
import { backgroundColor, textColor } from '../lib/theme'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CSS-Variable Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          ${lightTheme}
          @media (prefers-color-scheme: dark) { 
            body { background: black }
            ${darkTheme} 
          } `
        }</style>
      </Head>

      <main style={{maxWidth: '40rem', margin: 'auto', fontFamily: "sans-serif", padding: "2rem", background: backgroundColor.val}}>
        <h1 style={{color: textColor.val, textAlign: 'center'}}>
          Hello world
        </h1>
      </main>
      </>
  )
}

export default Home

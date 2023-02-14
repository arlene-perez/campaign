import Navbar from '@/components/NavBar';
// import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Head>
        <title>Wedding 2023</title>
        <meta property="og:title" content="Wedding 2023" key="title" />
      </Head>
      <main>{children}</main>
    </>
  )
}

// import '../app/globals.css'

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       {/*
//         <head /> will contain the components returned by the nearest parent
//         head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//       */}
//       <title>Wedding</title>
//       <head />
//       <body>{children}</body>
//     </html>
//   )
// }

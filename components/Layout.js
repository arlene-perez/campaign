import Navbar from '@/components/NavBar';
// import Footer from './footer'
import Head from 'next/head';
import styles from '../styles/page.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Navbar />
      <Head>
        <title>Arlene Perez for School Board</title>
        <meta property="og:title" content="Arlene Perez for School Board" key="title" />
      </Head>
      <main>{children}</main>
    </div>
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

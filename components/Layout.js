// import Navbar from './navbar'
// import Footer from './footer'

// export default function Layout({ children }) {
//   return (
//     <>
//       <Navbar />
//       <main>{children}</main>
//       <Footer />
//     </>
//   )
// }

// import '../app/globals.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <title>Wedding</title>
      <head />
      <body>{children}</body>
    </html>
  )
}

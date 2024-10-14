// import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <title>Arlene Perez for El Rancho School Board</title>
      <head />
      <body>{children}</body>
    </html>
  )
}

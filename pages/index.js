import Head from 'next/head'
import BackgroundGradient from '../components/background/Gradient'
import Header from '../components/background/Header'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundGradient />
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center relative">
        hi
      </main>

    </div>
  )
}

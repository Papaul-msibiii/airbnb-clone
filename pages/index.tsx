import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
const Home: NextPage = ({exploreData}) => {
  return (
    <div className="">
      <Head>
        <title>Paul Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          {exploreData?.map((item) => (
            <h1>{item.location}</h1>
          )
          )}
        </section>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}

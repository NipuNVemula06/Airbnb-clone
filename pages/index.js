import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { exploreData } from "../Data/exploreData";
import { anywhereData } from "../Data/anywhereData";
import ExploreCard from "../components/ExploreCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb 2.0 | NipuNVemula</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner  */}
      <Banner />

      <main className="container mx-auto px-5 md:px-10">
        <section className="pt-8">
          <h2 className="text-4xl font-semibold pb-5">
            Inspiration for your next trip
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData.map((item) => (
              <ExploreCard
                key={item.title}
                title={item.title}
                image={item.image}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section className="pt-12 mb-14">
          <h2 className="text-4xl font-semibold pb-5">
            Discover Airbnb Experiences
          </h2>
          <div className="flex space-x-5 scrollbar-hide overflow-scroll p-3 -ml-3">
            {anywhereData.map((item) => (
              <MediumCard
                key={item.image}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          image="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          button="Get Inspired"
        />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

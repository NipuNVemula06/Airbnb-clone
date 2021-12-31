import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import { searchData } from "../Data/searchData";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "MMM dd yyyy");
  const formattedEndDate = format(new Date(endDate), "MMM dd yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={` ${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex mt-24">
        <section className="flex-grow pt-14 px-6 ">
          <p className="text-md font-normal">
            300+ stays - {range} for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 ml-5 space-x-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchData?.map((result) => (
              <InfoCard
                key={result.img}
                img={result.img}
                location={result.location}
                title={result.title}
                description={result.description}
                star={result.star}
                price={result.price}
                total={result.total}
                img1={result.img1}
                img2={result.img2}
                img3={result.img3}
                img4={result.img4}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[650px] ">
          <Map />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

// https://jsonkeeper.com/b/8S2M

// export async function getServerSideProps() {
//   const searchResults = await fetch("https://jsonkeeper.com/b/8S2M").then(
//     (res) => res.json()
//   );
//   return {
//     props: {
//       searchResults,
//     },
//   };
// }

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  return (
    <div>
      <Header />
      <main className="flex mt-24">
        <section className="flex-grow pt-14 px-6">
          <div className="hidden lg:inline-flex mb-5 ml-5 space-x-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <p className="text-xs">300+ stays for 5 number og guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in Hyderabad
          </h1>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

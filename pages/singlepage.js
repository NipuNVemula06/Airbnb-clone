import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { StarIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import { ShareIcon, HeartIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";

function singlepage() {
  const router = useRouter();
  const {
    img,
    location,
    title,
    description,
    price,
    star,
    img1,
    img2,
    img3,
    img4,
  } = router.query;
  return (
    <div>
      <Header />
      <main className="max-w-screen-2xl mx-auto mt-[100px] mb-4">
        {/* top section */}
        <div className="mt-4 shadow-xl p-2">
          <div>
            <p className="text-2xl sm:text-[27px] md:text-[2rem] font-semibold py-3">
              {title}
            </p>
            <div className="flex justify-between ">
              <span className="flex flex-grow space-x-6 items-center">
                <span className="flex items-center  ">
                  <StarIcon className="h-7 text-red-500 mr-2 " />
                  <p className="text-xl text-gray-500">{star} (73 reviews)</p>
                </span>
                <p className="flex items-center text-md">
                  <BadgeCheckIcon className="h-7 text-red-600 mr-1" />
                  Superhost
                </p>
                <p className="font-bold text-gray-500 tracking-wide">
                  Hyderbad,Telangana,India
                </p>
              </span>
              <span className="hidden sm:inline-flex flex-grow items-center justify-end mr-4">
                <button className="flex mr-6  px-3 py-2 rounded-xl font-semibold  hover:bg-gray-200">
                  <ShareIcon className="h-7 mr-3" />
                  Share
                </button>
                <button className="flex  px-3 py-2 rounded-xl font-semibold  hover:bg-gray-200">
                  <HeartIcon className="h-7 mr-3" />
                  Save
                </button>
              </span>
            </div>
          </div>
          {/* image box */}
          <div className="flex mt-10 space-x-4">
            <div className="flex-grow">
              <img
                src={img}
                alt="main-image"
                className="lg:rounded-l-2xl w-[800px] h-[400px] sm:h-[500px] cursor-pointer hover:opacity-90"
              />
            </div>
            <div className="hidden lg:inline-flex space-x-6">
              <div>
                <img
                  src={img1}
                  className="object-cover h-[240px] w-[350px] mb-5 cursor-pointer hover:opacity-90"
                />
                <img
                  src={img2}
                  className="object-cover h-[240px] w-[350px] cursor-pointer hover:opacity-90"
                />
              </div>
              <div>
                <img
                  src={img3}
                  className=" object-cover h-[240px] w-[350px] mb-5 rounded-tr-2xl cursor-pointer hover:opacity-90"
                />
                <img
                  src={img4}
                  className="object-cover h-[240px] w-[350px] rounded-br-2xl cursor-pointer hover:opacity-90"
                />
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div className="flex flex-col sm:flex-row justify-between px-2 mt-10 mb-3">
            <div className="flex flex-col space-y-4 mb-3">
              <span className="text-3xl font-medium">{location}</span>
              <span className="text-xl">{description}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-3xl mb-10">{price}</span>
              <button
                className="border bg-[#FF5A5F] px-4 py-3 text-white font-medium text-lg
                                rounded-lg hover:shadow-xl active:scale-90 transition duration-140"
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default singlepage;

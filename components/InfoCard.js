import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { searchData } from "../Data/searchData";

function InfoCard({
  img,
  title,
  description,
  star,
  price,
  total,
  location,
  img1,
  img2,
  img3,
  img4,
}) {
  const router = useRouter();
  const gotoSinglepage = () => {
    router.push({
      pathname: "/singlepage",
      query: {
        img: img,
        location: location,
        title: title,
        description: description,
        star: star,
        price: price,
        total: total,
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
      },
    });
  };

  return (
    <div
      onClick={gotoSinglepage}
      className="flex py-7 px-2 pr-4  border-b cursor-pointer hover:opacity-90
                    hover:shadow-lg transition duration-150 ease-out first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-5 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center ">
            <StarIcon className="h-5 text-red-400 " />
            {star}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;

import Image from "next/image";

function ExploreCard({ image, distance, title, color }) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer 
                hover:bg-gray-50 hover:shadow-sm hover:scale-105 
                transition duration-300 ease-out"
    >
      <div className="relative h-16 w-16">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="font-extrabold text-gray-600 text-xl">{title}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default ExploreCard;

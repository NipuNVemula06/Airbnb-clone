import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full  text-center">
        <p className="text-2xl sm:text-4xl  font-semibold">
          Not sure where to go? Perfect.
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-4
                    shadow-md rounded-full my-3 font-bold hover:shadow-xl active:scale-90 transition duration-140"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;

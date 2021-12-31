import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenterOfBounds from "geolib/es/getCenterOfBounds";
import { searchData } from "../Data/searchData";
import Image from "next/image";

function Map() {
  const [selectedLocation, setSelectedLocation] = useState({});

  //transform the search results object into {lat ,long} object
  const coordinates = searchData.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenterOfBounds(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/nipun-vemula/ckxt1d0y41c4w14oexwepxnm0"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchData.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer bg-white p-2 rounded-lg text-md shadow-md font-bold transition duration-150 hover:scale-125 hover:z-50 z-50
                            active:bg-black active:text-white"
            >
              {result.price}
            </p>
          </Marker>

          {/* popup when we click on the marker */}

          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              <div className="">
                <div className="p-2 flex flex-col rounded-xl">
                  <Image
                    className="object-cover rounded-2xl"
                    src={result.img}
                    width={250}
                    height={250}
                  />
                  <p className="font-medium mt-2">{result.title}</p>
                  <p className="text-lg mt-2 font-bold">{result.price}</p>
                </div>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;

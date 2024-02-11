import React, { useRef, useEffect, useState } from "react";
import Header from "../features/ui/header.jsx";
import NavigationSidebar from "../features/ui/navigationSidebar.jsx";
import PaymentCollectedBox from "../features/ui/paymentCollectedBox.jsx";
import EnergyUsedBox from "../features/ui/energyUsedBox.jsx";
import TotalSessionsBox from "../features/ui/totalSessionsBox.jsx";
import TotalEVstationBox from "../features/ui/totalEVstationBox.jsx";
import MapMarker2 from "../features/images/MapMarker2.png";
export default function Chargers() {
  const [isOpen, SetIsOpen] = useState(false);
  const mapContainerRef = useRef(null); // Reference to the map container
  const mapRef = useRef(null); // Reference to the map instance
  useEffect(() => {
    if (mapRef.current) {
      // Map is already initialized
      return;
    }
    const script = document.createElement("script");
    script.src = `https://api1.tplmaps.com/js-api-v2/assets/tplmaps.js?api_key=$2a$10$DTYD70WKuSr4Er7vSj8ZuebBRChI5wo7vdakw5aKkvTl4sdbDdNsm`;
    // Assign an ID to the script for easy removal
    document.body.appendChild(script);

    script.onload = () => {
      if (mapRef.current) {
        // Map is already initialized
        return;
      }
      const mapOptions = {
        lat: 31.524669696492456,
        lng: 74.37138876452508,
        zoom: 13,
        minZoom: 0,
        maxZoom: 20,
        divID: mapContainerRef.current.id,
      };
      mapRef.current = window.TPLMaps.map.initMap(mapOptions);

      const locations = [
        // Davis Road Garih shahu
        {
          lat: 31.56134602703795,
          lng: 74.33853419861738,
          label: "Test location,Lahore",
          icon: MapMarker2, // Replace with the path to your custom icon
          map: mapRef.current,
        },
        // Sher Ali Road
        {
          lat: 31.52451839703098,
          lng: 74.38028992325293,
          label: "Test location,Lahore",
          icon: MapMarker2, // Replace with the path to your custom icon
          map: mapRef.current,
        },
        // Girja Chowk
        {
          lat: 31.46802053013481,
          lng: 74.25973594609944,
          label: "Test location,Lahore",
          icon: MapMarker2, // Replace with the path to your custom icon
          map: mapRef.current,
        },
        // Girja Chowk
        {
          lat: 31.522298993821206,
          lng: 74.37976936812446,
          label: "Test location,Lahore",
          icon: MapMarker2, // Replace with the path to your custom icon
          map: mapRef.current,
        },
      ];

      locations.forEach((location) => {
        const marker = window.TPLMaps.overlays.point(location);

        // Add an onClick event listener to the marker
        marker.on("click", () => {
          SetIsOpen(true);
        });

        const options = {
          map: mapRef.current,
          geomObject: marker,
        };
        window.TPLMaps.overlays.addToMap(options);
        if (mapRef.current && mapRef.current.setView) {
          // Ensure mapRef.current.setView is a function
          mapRef.current.setView(marker.getLatLng());
        }
      });
    };
    return () => {
      // Directly use the script reference to remove it from the body
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (mapRef.current && window.TPLMaps && window.TPLMaps.map) {
        // Clean up map instance if necessary, depends on TPLMaps API
        // For example: mapRef.current.remove();
        mapRef.current = null;
      }
      // Additional cleanup if necessary
    };
  }, []);

  return (
    <div>
      <div class="w-screen h-screen bg-gray-50 relative overflow-hidden">
        <Header />
        <div class="absolute top-[80px] left-0 right-0 bottom-0 overflow-x-auto overflow-y-auto">
          <div class="flex flex-row">
            <PaymentCollectedBox />
            <EnergyUsedBox />
            <TotalSessionsBox />
            <TotalEVstationBox />
          </div>
          <div
            id="map"
            ref={mapContainerRef}
            className="ml-[225px] w-[1100px] h-[400px] z-0"
          ></div>
        </div>
      </div>
    </div>
  );
}

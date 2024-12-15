"use client"

import React, {useEffect} from "react";
import { Loader } from '@googlemaps/js-api-loader';

export function Map(){

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {

        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
            });

            const { Map } = await loader.importLibrary('maps');

            const position = {
                lat: 11.6530651,
                lng: 104.9091141
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 15,
                mapId: 'MY_MAPID'
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions); 
        }

        initMap();
    }, []);

    return(
        <div className="h-[510px]" ref={mapRef}></div>
    )
}
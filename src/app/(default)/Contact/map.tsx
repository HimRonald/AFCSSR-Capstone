"use client"

import React, {useEffect} from "react";
import { Loader } from '@googlemaps/js-api-loader';

export function Map() {
    return (
        <div className="w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[700px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4808.325643824714!2d104.87428617505478!3d11.643388888563091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM4JzM2LjIiTiAxMDTCsDUyJzM2LjciRQ!5e1!3m2!1sen!2skh!4v1734499812942!5m2!1sen!2skh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    );
}


'use client';

import {useEffect, useState} from "react";
import PropertyListItem from "@/app/components/properties/PropertyListItem";
import apiService from "@/app/components/services/apiService";
export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
}

const PropertyList = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const tmpProperties = await apiService.get('/api/proerties/')

        setProperties(tmpProperties.data);
    };

    useEffect(() => {
        getProperties();
    }, []);

    return (
        <>
            {properties.map((property) =>{
                return(
                    <PropertyListItem
                        key={property.id}
                        property={property}
                    />
                )
            })}

        </>
    )
}

export default PropertyList;
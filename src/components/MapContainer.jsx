import { useState, useEffect } from 'react';

function MapComponent() {
    const [isLoading, setIsLoading] = useState(true);
    const [mapLoaded, setMapLoaded] = useState(false);
    
    const address = "The Link, 173 Oxford Road, Rosebank, Johannesburg, 2196";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`;

    useEffect(() => {
        // Simulate loading time to ensure smooth transition
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleMapLoad = () => {
        setMapLoaded(true);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center" style={{ width: '100%', height: '400px', backgroundColor: '#f3f4f6' }}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading map...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative" style={{ width: '100%', height: '400px' }}>
            {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-2 text-sm text-gray-600">Loading Google Maps...</p>
                    </div>
                </div>
            )}
            <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={handleMapLoad}
                title="mPower ratings HQ location"
            />
        </div>
    );
}

export default MapComponent;
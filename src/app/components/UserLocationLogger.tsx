'use client';

import { useEffect } from 'react';

export function UserLocationLogger() {
  useEffect(() => {
    const logUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log('User location:', {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy
            });
          },
          (error) => {
            console.error('Error getting location:', error.message);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };

    // Log location when component mounts
    logUserLocation();

    // Set up an interval to log location every 5 minutes
    const intervalId = setInterval(logUserLocation, 5 * 60 * 1000);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // This component doesn't render anything
  return null;
}

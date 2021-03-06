import { useState } from 'react';

function useLocation() {
  const [loading, setLoading] = useState(false);

  // define getLocation
  const getLocation = async (name: string) => {
    const url: string = `https://rickandmortyapi.com/api/location/?name=${name}`;

    setLoading(true);

    try {
      const data = await fetch(url);

      return data.json();
    } catch (err) {
      console.log('err', err);
    } finally {
      setLoading(false);
    }
  };

  return [loading, getLocation];

  // ** method to return an object instead of an array ** //
  // object return option (instead of above array)
  // return Object.assign([loading, getLocation], {
  //   isLoading: loading,
  //   request: getLocation,
  // });
}

export default useLocation;

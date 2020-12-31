import Axios from "axios";
import { useEffect, useState } from "react";

export const useTripsList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    Axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/marnand-tang/trips')
      .then((res) => setTrips(res.data.trips))
  }, []);

  return trips;
};
import {useEffect, useState} from "react";
export const useFetchAPI = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData?.data);
        console.log(
          "Datat of Res list",
          jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards,
        );
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);
  return data;
};

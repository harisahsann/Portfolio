import { useState } from "react";
import axios from "axios";



const useApiData = (api) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(api);
            setData(response.data.movies);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return [data, fetchData];
}

export default useApiData;

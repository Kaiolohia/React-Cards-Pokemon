import { useState } from "react";
import Axios from "axios";
import uuid from "uuid";


const useAxios = (link) => {
    const [data, setData ] = useState([])
    const getData = async (url = link) => {
        try {
            const res = await Axios.get(url);
            setData(data => [...data, {...res.data, id:uuid()}] )
        } catch (e) {
            alert(e)
            throw new Error(e)
        }
    }
    return [ data, getData ]
};

export default useAxios;
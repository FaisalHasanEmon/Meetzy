import axios from "axios";
import serverDomain from "./ServerDomain";

const axiosPublic =axios.create({
    baseURL: serverDomain,
   
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
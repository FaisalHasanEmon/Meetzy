import axios from "axios";

const axiosPublic =axios.create({
    baseURL: 'https://task-manager-application-server-kappa.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
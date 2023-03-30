import { instance } from "../axios/api";
// import { keys } from "@/utils/createuseQueryKey";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetProfile = () => {
    const {data,isLoading} = useQuery({
        queryKey: ["GET_PROFILE"],
        queryFn: async () => {
            const data = await instance.get('/profile');
            console.log('Get 데이터',data);
            return data;
        }
    });
    return {
        profile: data,
        ProfileIsLoading: isLoading,
    }
}

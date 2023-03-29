import { instance } from "../axios/api";
// import { keys } from "@/utils/createuseQueryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddProfile = () => {
    // const queryClinet = useQueryClient();

    const {mutate,isLoading, isSusccess} = useMutation({
        mutationFn: async (payload) => {
            const {data} = await instance.post('/profile',payload);
            console.log('Add 데이터',data);
            return data;
        }
    })
    return {
        addProfile: mutate,
        addProfileIsLoading: isLoading,
    }
}

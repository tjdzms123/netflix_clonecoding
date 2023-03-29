import { instance } from "../axios/api";
// import { keys } from "@/utils/createuseQueryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProfile = () => {
    // const queryClinet = useQueryClient();

    const {mutate: updateProfile} = useMutation({
        mutationFn: async ({id, newArr}) => {
            await instance.post(`/profile/${id}`,newArr);
        }
    })
    return {updateProfile};
};

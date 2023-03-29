import { instance } from "../axios/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteProfile = () => {
    const {mutate: deleteProfile, status} = useMutation({    
        mutationFn: async (id) => {
        await instance.post(`/profile/${id}`);
    }});
    return {
        deleteProfile,
        status,
    }
}



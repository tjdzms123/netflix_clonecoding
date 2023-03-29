import styled from "styled-components";
import React, { useState } from 'react'
import { useAddProfile } from '../../hook/useAddProfile';
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteProfile } from "../../hook/useDeleteProfile";
import { useUpdateProfile } from "../../hook/useUpdateProfile";

function ProfileButton({newProfile}) {
    const queryClient = useQueryClient();
    const [isEditMode,setIsEditMode] = useState(false);
    //프로필 추가
    const {addProfile,addProfileIsLoading} = useAddProfile();
    //프로필 삭제
    const {deleteProfile,status} = useDeleteProfile();
    //프로필 수정
    const {updateProfile} = useUpdateProfile();

    const deleteHandeler = id => {
        console.log(id);
        deleteProfile(id)
    }

  return (
    <div>
         <StButton>수정</StButton>
            <StButton onClick={()=>addProfile(newProfile())}>
              {addProfileIsLoading ? "등록중.." : "추가"}
            </StButton>
            <StButton
            onClick={() => deleteHandeler(newProfile.id)} >프로필 삭제</StButton>
    </div>
  )
}

export default ProfileButton;


const StButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
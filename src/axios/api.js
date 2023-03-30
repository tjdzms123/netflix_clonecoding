import axios from "axios";
import { cookies } from "../shared/cookies";

export const instance = axios.create({
    baseURL: "http://52.78.166.176:3000",
});

// instance.interceptors.request.use(
//     // 요청을 보내기 전 수행되는 함수
//     function (req) {
//         const token = cookies.get('token');
//         // 겟 했을때 토큰이 없으면 요청 그대로 리턴
//         // if (!token) return req;

//         // 토큰이 있으면 헤더에 넣어서 리턴
//         req.headers.Authorization = `Bearer ${token}`;
//         return req;
//     },

//     // 오류 요청을 보내기 전 수행되는 함수
//     function (error) {
//         // console.log('인터셉터 요청 오류');
//         return Promise.reject(error);
//     }
// );

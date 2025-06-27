import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";
import axios from "axios";

export const authChatStore = create(set, get)=> ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/message/users");
            set({ users: res.data })
        }catch(error){
            toast.error(error.Response.data.messages);
        }finally{
            set({isUsersLoading:false});
        }
    },

    getMessages:async()=>{
        set({isMessagesLoading:true});
        try{
            const res= await axiosInstance.get(`/messages/${userId}`);
            set({messages:res.data});
        }catch(error){
            toast.error(response.error.data.messages);
        }finally{
            set({isMessagesLoading:false});
        }
    }

})
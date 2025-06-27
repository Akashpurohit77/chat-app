import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
// import { formatMessageTime } from "../lib/utils";

const Chatcontainer = () => {
    const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    // subscribeToMessages,
    // unsubscribeFromMessages,
  } = useChatStore();

    const { authUser } = useAuthStore();

    useEffect(() => {
        getMessages(selectedUser._id);
    }, [selectedUser._id, getMessages]);


    if (isMessagesLoading) {
        return (
            <div className="flex-1 flex flex-col overflow-auto">
                <ChatHeader />
                <MessageSkeleton />
                <MessageInput />
            </div>
        );
    }
    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <ChatHeader />
            <p>messagses.....</p>
            <MessageInput/>
        </div>
    )
}

export default Chatcontainer

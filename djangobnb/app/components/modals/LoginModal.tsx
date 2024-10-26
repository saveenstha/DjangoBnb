'use client';

import Modal from "@/app/components/modals/Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import {useState} from "react";
import CustomButton from "@/app/components/forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal()
    const content = (
        <>
            <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in</h2>

            <form className="space-y-4">
                <input type="email"
                       placeholder="your email address"
                       className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                <input type="password"
                       placeholder="your password"
                       className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>
                <CustomButton
                    label="Submit"
                    onClick={()=>console.log("Test")}/>
            </form>
        </>
    )
    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log In"
            content={content}
        />
    )
}

export default LoginModal;
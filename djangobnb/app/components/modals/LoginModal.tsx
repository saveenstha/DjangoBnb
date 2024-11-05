'use client';

import Modal from "@/app/components/modals/Modal";

import {useState} from "react";
import {useRouter} from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "@/app/components/forms/CustomButton";
import {handleLogin} from "@/app/lib/actions";
import apiService from "@/app/components/services/apiService";

const LoginModal = () => {
    const router = useRouter()
    const loginModal = useLoginModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password,
        }

        const response = await apiService.post('/api/auth/login/', JSON.stringify(formData))
        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh);

            loginModal.close();

            router.push('/')
        } else {
            setErrors(response.non_field_errors);
        }

    }

    const content = (
        <>
            <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in</h2>

            <form
                action={submitLogin}
                className="space-y-4"
            >
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email address" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="your password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                {errors.map((error, index) => {
                    return (
                        <div
                            key={`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        >
                            {error}
                        </div>
                    )
                })}
                <CustomButton
                    label="Submit"
                    onClick={submitLogin}/>
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
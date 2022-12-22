import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import RegisterForm from './RegisterForm';



//! https://nsikakimoh.com/blog/form-validation-nextjs-react-hook-form-yup




//! nafe
const LoginForm = () => {

    const loginShema = Yup.object().shape({

        email: Yup.string()
            .email('Lutfen gecerli email adresini giriniz.')
            .required('Lutfen email kismini bos birakmayiniz'),
        password: Yup.string()
            .min(6, 'Sifre en az 6 karakter icermelidir')
            .max(20, 'Sifre en fazla 20 karakter icermelidir.')
            .required('Lutfen password kismini bos birakmayiniz')
            .matches(/\d+/, 'Sifre rakam icermelidir')
            .matches(/[a-z]+/, 'Sifre kucuk harf icermelidir')
            .matches(/[A-Z]+/, 'Sifre buyuk harf icermelidir')
            .matches(/[!,?{}><%&$#£+-.]+/, 'Sifreniz ozel karakter icermelidir'),
    });
    const formOptions = { resolver: yupResolver(loginShema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = () => {
        console.log("data")
    }
    return (
        <div className="mt-40 flex flex-col px-8 md:px-80 xl:px-96">


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow-xl p-16">

                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-800"
                        >
                            E-Mail
                        </label>
                        <div className="invalid-feedback">{(errors.email as any)?.message}</div>
                        <input
                            {...register("email")}
                            type="email"
                            id="email"
                            className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 "
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-800"
                        >
                            Password
                        </label>
                        <div className="invalid-feedback">{(errors.email as any)?.message}</div>
                        <input
                            {...register("password")}
                            type="password"
                            id="password"
                            className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 "
                        />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 " />
                        </div>
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>

                    <button
                        className=" font-medium py-2 px-6 rounded  hover:bg-blue-700 text-white w-full text-center bg-blue-500">
                        Login
                    </button>

                </div>

            </form>
            
        </div>
    );
}

export default LoginForm;
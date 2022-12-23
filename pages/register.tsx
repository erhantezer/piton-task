import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

//! https://nsikakimoh.com/blog/form-validation-nextjs-react-hook-form-yup
// function Example() {
//   // `value` will be the parsed phone number in E.164 format.
//   // Example: "+12133734253".
//   const [value, setValue] = useState()
//   return (
//     <PhoneInput
//       placeholder="Enter phone number"
//       value={value}
//       onChange={setValue}/>
//   )
// }


//! nafe, nf
const RegisterForm = () => {
    const [value, setValue] = useState<any>();
    // const [name, setName] = useState("");
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");

    const router = useRouter()

    const registerShema = Yup.object().shape({
        name: Yup.string()
            .required("Adinizi girmeniz zorunlu!"),
        surname: Yup.string()
            .required("Soyadinizi girmeniz zorunlu!"),
        telephone: Yup.number()
            .min(17)
            .required("Tel girmeniz zorunlu!"),
        email: Yup.string()
            .email("E-Mail formatinda giriniz!")
            .required("Email girmeniz zorunlu!"),
        password: Yup.string()
            .min(6, 'Sifre en az 6 karakter icermelidir')
            .max(20, 'Sifre en fazla 20 karakter icermelidir.')
            .required('Lutfen password kismini bos birakmayiniz')
            .matches(/\d+/, 'Sifre rakam icermelidir')
            .matches(/[a-z]+/, 'Sifre kucuk harf icermelidir')
            .matches(/[A-Z]+/, 'Sifre buyuk harf icermelidir')
            .matches(/[!,?{}><%&$#£+-.]+/, 'Sifreniz ozel karakter icermelidir'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Şifreniz eşleşmiyor!")
            .required("Şifre girmeniz zorunlu!")
            .matches(/\d+/, 'Sifre rakam icermelidir')
            .matches(/[a-z]+/, 'Sifre kucuk harf icermelidir')
            .matches(/[A-Z]+/, 'Sifre buyuk harf icermelidir')
            .matches(/[!,?{}><%&$#£+-.]+/, 'Sifreniz ozel karakter icermelidir'),
    });
    const formOptions = { resolver: yupResolver(registerShema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = (data: any) => {
        axios
      .post("https://assignment-api.piton.com.tr/api/v1/user/register", {
        name: data.name,
        password: data.password,
        email: data.email,
      })
      .then((res) => {
        console.log("res", res.data);
        localStorage.setItem("user", res.data.token);
        router.push("/products");
      })
      .catch((err) => {
        console.log("Bad REQUEST", err);
      });
        router.push("/products")
    };

    return (<>
        <Navbar />
        <div className="mt-1 flex flex-col  md:px-80 xl:px-96">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow-xl p-12">
                    <div className="mb-3">
                        <label
                            htmlFor="name"
                            className="block mb-3 text-sm font-medium text-gray-900"
                        >
                            Name
                        </label>
                        <div className="invalid-feedback">{(errors.name as any)?.message}</div>
                        <input
                            {...register("name")}
                            type="text"
                            id="name"
                            className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 "
                            placeholder="Name"
                            // value={name}
                            // onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="surname"
                            className="block mb-3 text-sm font-medium text-gray-900"
                        >
                            Surname
                        </label>
                        <div className="invalid-feedback">{(errors.surname as any)?.message}</div>
                        <input
                            {...register("surname")}
                            type="text"
                            id="surname"
                            className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 "
                            placeholder="Surname"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="telephone"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Phone
                        </label>
                        <div className="invalid-feedback">{(errors.telephone as any)?.message}</div>
                        <PhoneInput
                            
                            maxLength="17"
                            // onChange={() => console.log("value")}
                            id="telephone"
                            className="bg-gray-100  border text-sm rounded-lg border-gray-400 w-full p-2 "
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="TR"
                            placeholder="Enter Phone Number"
                            value={value}
                            {...register("telephone")}
                            onChange={setValue}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
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
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="password"
                            className="block mb-3 text-sm font-medium text-gray-900"
                        >
                            Password
                        </label>
                        <div className="invalid-feedback">{(errors.password as any)?.message}</div>
                        <input
                            {...register("password")}
                            type="password"
                            id="password"
                            className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 "
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="password-confirm"
                            className="block mb-3 text-sm font-medium text-gray-900"
                        >
                            Confirm Password
                        </label>
                        <div className="invalid-feedback">{(errors.confirmPassword as any)?.message}</div>
                        <input
                            {...register("confirmPassword")}
                            type="password"
                            id="password-confirm"
                            className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 "
                        />
                    </div>
                    <button
                        className="bg-blue-500  hover:bg-blue-700 text-white font-medium py-2 px-6 rounded w-full text-center">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </>
    );
}

export default RegisterForm;
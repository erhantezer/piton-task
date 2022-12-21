import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import {useState} from "react"

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

// import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'

// <PhoneInput
//   placeholder="Enter phone number"
//   value={value}
//   onChange={setValue}
//   error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}/>

// Is possible: {value && isPossiblePhoneNumber(value) ? 'true' : 'false'}
// Is valid: {value && isValidPhoneNumber(value) ? 'true' : 'false'}
// National: {value && formatPhoneNumber(value)}
// International: {value && formatPhoneNumberIntl(value)}

//! nafe, nf
const RegisterForm = () => {
    const [value, setValue] = useState();
    return (
        <div className="mt-40 flex flex-col  md:px-80 xl:px-96">
            <form>
                <div className="shadow-xl p-12">
                    <div className="mb-3">
                        <label
                            htmlFor="name-register"
                            className="block mb-3 text-sm font-medium text-gray-900"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 "
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="surname"
                            className="block mb-3 text-sm font-medium text-gray-900"
                        >
                            Surname
                        </label>
                        <input
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

                        <PhoneInput
                            maxLength="17"
                            onChange={()=> console.log("value") }
                            id="tel"
                            className="bg-gray-100  border text-sm rounded-lg border-gray-400 w-full p-2 "
                            value={value}
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="TR"
                            placeholder="Enter Phone Number"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            E-Mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 "
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="password-register"
                            className="block mb-3 text-sm font-medium text-gray-900"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password-register"
                            className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 "
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="again-password-register"
                            className="block mb-3 text-sm font-medium text-gray-900"
                        >
                            Password again
                        </label>

                        <input
                            type="password"
                            id="again-password-register"
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
    );
}

export default RegisterForm;
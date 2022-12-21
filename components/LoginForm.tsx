//! nafe
const LoginForm = () => {



    return (
        <div className="mt-40 flex flex-col px-8 md:px-80 xl:px-96">
            <div className="flex justify-center gap-x-28 mt-2">
                <button 
                    className="bg-blue-500 w-28 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">
                    Login
                </button>

                <button 
                    className="bg-blue-500 w-28 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">
                    Register
                </button>
            </div>
            
                <form >
                    <div className="shadow-xl p-16">

                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-800"
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
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-800"
                            >
                                Password
                            </label>
                            <input
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
                                    className="bg-gray-100 border text-sm rounded-lg border-gray-400 w-full p-2 "/>
                            </div>
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm font-medium text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded w-full text-center">
                            Login
                        </button>
                        
                    </div>
                    
                </form>
        </div>
    );
}

export default LoginForm;
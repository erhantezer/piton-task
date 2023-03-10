import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiLoginCircleLine, RiLogoutCircleRLine } from "react-icons/ri";



const Navbar = () => {

    const [currentUser, setCurrentUser] = useState<any>("");

    useEffect(() => {
        setCurrentUser(localStorage.getItem("user"));
    }, []);

    const router = useRouter();
    const removeUser = () => {
        localStorage.removeItem("user");
        setCurrentUser("");
        router.push("/login");
    };

    return (

        <div className="border-b-4 border-slate-400 py-2 bg-slate-200">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div>
                    <Link href={currentUser ? "/products" : "/login"}>
                        <p className="bg-blue-500 py-2 px-6 text-white rounded-full font-semibold
                        text-lg">
                            Piton<span className="text-blue-200">Shop</span></p>
                    </Link>
                </div>
                <div className="flex items-center gap-x-10">
                    {currentUser ? (
                        <Link href="/login">
                            <button
                                onClick={() => removeUser()}
                                className="flex gap-1 font-medium py-2 px-2 rounded  hover:bg-gray-500 text-black  text-center bg-white">

                                <RiLogoutCircleRLine size={22} /> Logout
                            </button>
                        </Link>
                    ) : (<div className="flex gap-3">
                        <Link href="/login" >
                            <button
                                className="flex gap-2 font-medium py-2 px-2 rounded  hover:bg-blue-700 text-white w-28 text-center bg-blue-500">
                                <RiLoginCircleLine size={22} />
                                Login
                            </button>
                        </Link>
                        <Link href="/register">
                            <button
                                className="flex gap-2 font-medium py-2 px-2 rounded  hover:bg-blue-700 text-white  text-center bg-blue-500">
                                <RiLoginCircleLine size={22} />
                                Register

                            </button>
                        </Link>

                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {RiLoginCircleLine,RiLogoutCircleRLine} from "react-icons/ri";



const Navbar = () => {
const currentUser:boolean =false
const router = useRouter();

    return (
        
        <div className="border-b-4 border-slate-400 py-2 bg-slate-200">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div>
                    <Link href="/">
                        <p className="bg-blue-500 py-2 px-4 text-white rounded">
                            Piton<span>Shop</span></p>
                    </Link>
                </div>
                <div className="flex items-center gap-x-10">
                    {/* <Link href="/products" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ">
                        Products
                    </Link> */}
                    {currentUser ? (
                        <button                     
                            className="flex gap-1 font-medium py-2 px-2 rounded  hover:bg-gray-500 text-black  text-center bg-white">
                        
                            <RiLogoutCircleRLine size={22} /> Logout
                        </button>
                    ) : (<div className="flex gap-3">
                        <Link href="/" >
                            <button 
                            onClick={() =>router.push("/login")}
                            className="flex gap-2 font-medium py-2 px-2 rounded  hover:bg-blue-700 text-white w-28 text-center bg-blue-500">
                                <RiLoginCircleLine size={22} />
                                Login                          
                            </button>
                        </Link>
                        <Link href="/">
                            <button 
                            onClick={() =>router.push("/register")}
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
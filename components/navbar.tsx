

'use client'
import Link from "next/link"



function NavBar() {

    return (

        <nav className="bg-green-200 lg:px-20">
<div className="bg-green-900 flex justify-between lg:px-14 h-10 py-2 mt-10 rounded-4xl">
    
            <div className="text-white font-bold">
                <p>SoLink</p>
            </div>


            <div>

                <ul className="flex gap-5 text-white font-bold ">
                    <li>
                        <p className="text-sm">Home</p>
                    </li>
                    <li>
                        <p className="text-sm">Property</p>
                    </li>
                    <li>
                        <p className="text-sm">About Us</p>
                    </li>
                    <li>
                        <p className="text-sm">Contact</p>
                    </li>
                </ul>

            </div>


            <div>
                <button className="bg-white text-black rounded-4xl px-5">
                    +(234)8138 487256
                </button>
            </div>
</div>


        </nav>


    )

}

export default NavBar
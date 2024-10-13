import Image from "next/image"
import icon1 from '../public/icon1.png'
import icon2 from '../public/icon2.png'
import icon3 from '../public/icon3.png'


const Footer = () =>{
    return(
        <footer className="px-[5%]">
            <div className="py-20 flex justify-between">
                <div>
                    <p className="text-xl mb-5">Subscribe our newsletter</p>
                    <div className="flex items-center">
                        <input type="text" className="outline-1 border-[1px] p-[2px] w-60 h-8 focus:rounded-none"/>
                        <button className="px-5 py-1 bg-black text-white h-8">Subscribe</button>
                    </div>
                    <div className="flex items-center mt-80">
                        <Image src={icon1} className="w-20 h-20"/>
                        <Image src={icon2} className="w-20 h-20"/>
                        <Image src={icon3} className="w-20 h-20"/>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl">Landing Pages</h2>
                    <ul>
                        <li className="cursor-pointer p-2 pl-0">Landing 1</li>
                        <li className="cursor-pointer p-2 pl-0">Landing 2</li>
                        <li className="cursor-pointer p-2 pl-0">Landing 3</li>
                        <li className="cursor-pointer p-2 pl-0">Landing 4</li>
                    </ul>
                    <h2 className="text-2xl py-3">Company</h2>
                    <ul>
                        <li className="cursor-pointer p-2 pl-0">About 1</li>
                        <li className="cursor-pointer p-2 pl-0">About 2</li>
                        <li className="cursor-pointer p-2 pl-0">Contact 1</li>
                        <li className="cursor-pointer p-2 pl-0">Contact 2</li>
                        <li className="cursor-pointer p-2 pl-0">Contact 3</li>
                        <li className="cursor-pointer p-2 pl-0">Team</li>
                        <li className="cursor-pointer p-2 pl-0">FAQ</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl">CMS Pages</h2>
                    <ul>
                        <li className="cursor-pointer p-2 pl-0">Blog 1</li>
                        <li className="cursor-pointer p-2 pl-0">Blog 2</li>
                        <li className="cursor-pointer p-2 pl-0">Blog 3</li>
                        <li className="cursor-pointer p-2 pl-0">Single Post Page</li>
                        <li className="cursor-pointer p-2 pl-0">Shop 1</li>
                        <li className="cursor-pointer p-2 pl-0">Shop 2</li>
                        <li className="cursor-pointer p-2 pl-0">Single Product Page</li>
                        <li className="cursor-pointer p-2 pl-0">Careers</li>
                        <li className="cursor-pointer p-2 pl-0">Single Careers Page</li>
                        <li className="cursor-pointer p-2 pl-0">Works</li>
                        <li className="cursor-pointer p-2 pl-0">Single Work Page</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl">Utility</h2>
                    <ul>
                        <li className="cursor-pointer p-2 pl-0">Coming Soon</li>
                        <li className="cursor-pointer p-2 pl-0">Password</li>
                        <li className="cursor-pointer p-2 pl-0">Privacy Policy</li>
                        <li className="cursor-pointer p-2 pl-0">Terms and Conditions</li>
                        <li className="cursor-pointer p-2 pl-0">404</li>
                        <li className="cursor-pointer p-2 pl-0">Licensing</li>
                        <li className="cursor-pointer p-2 pl-0">Style Guide</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between my-10">
                <p>POWERED BY <span className="text-[#E2B013]">WEBFLOW</span></p>
                <p>CREATED BY <span className="text-[#E2B013]">UDESLY</span></p>
            </div>
        </footer>
    )
}

export default Footer
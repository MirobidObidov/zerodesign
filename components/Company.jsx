import Image from "next/image"
import company1 from '../public/company1.jpg'
import company2 from '../public/company2.jpg'
import company3 from '../public/company3.jpg'
import company4 from '../public/company4.jpg'
import company5 from '../public/company5.jpg'
import company6 from '../public/company6.jpg'
import company7 from '../public/company7.jpg'

const Company = () => {
  return (
    <div className="px-[5%] mt-40">
        <button className="bg-black text-white p-2 pl-4 text-lg pr-14 flex justify-start cursor-text">Company</button>
        <div className="flex gap-10 mt-10">
            <div className="w-4/12 bg-[#e2e2e2] p-5">
                <Image src={company1} className="h-60"/>
                <p className="mt-2">ABOUT 1</p>
            </div>
            <div className="w-4/12 bg-[#e2e2e2] p-5">
                <Image src={company2} className="h-60"/>
                <p className="mt-2">ABOUT 2</p>
            </div>
            <div className="w-4/12 bg-[#e2e2e2] p-5">
                <Image src={company3} className="h-60"/>
                <p className="mt-2">ABOUT 3</p>
            </div>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="w-4/12 bg-[#e2e2e2] p-5">
                <Image src={company4} className="h-60"/>
                <p className="mt-2">ABOUT 1</p>
            </div>
            <div className="w-4/12 bg-[#e2e2e2] p-5">
                <Image src={company5} className="h-60"/>
                <p className="mt-2">ABOUT 2</p>
            </div>
            <div className="w-4/12 bg-[#e2e2e2] p-5">
                <Image src={company6} className="h-60"/>
                <p className="mt-2">ABOUT 3</p>
            </div>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="w-[31.5%] bg-[#e2e2e2] p-5">
                <Image src={company7} className="h-60"/>
                <p className="mt-2">ABOUT 1</p>
            </div>
        </div>
    </div>
  )
}

export default Company
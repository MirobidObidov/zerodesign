import Image from "next/image"
import utility1 from '../public/utility1.jpg'
import utility2 from '../public/utility2.jpg'
import utility3 from '../public/utility3.jpg'
import utility4 from '../public/utility4.jpg'
import utility5 from '../public/utility5.jpg'

const Utility = () => {
  return (
    <div className="px-[5%] mt-40">
        <button className="bg-black text-white p-2 pl-4 text-lg pr-14 flex justify-start cursor-text">Ultility</button>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={utility1} className="h-80"/>
                <p className="mt-2">COMING SOON</p>
            </div>
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={utility2} className="h-80"/>
                <p className="mt-2">404</p>
            </div>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={utility3} className="h-80"/>
                <p className="mt-2">PASSWORD</p>
            </div>
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={utility4} className="h-80"/>
                <p className="mt-2">PRIVACY POLICY</p>
            </div>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={utility5} className="h-80"/>
                <p className="mt-2">TERMS AND CONDITION</p>
            </div>
        </div>
    </div>
  )
}

export default Utility
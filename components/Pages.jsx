import Image from "next/image"
import pages1 from '../public/pages1.jpg'
import pages2 from '../public/pages2.jpg'
import pages3 from '../public/pages3.jpg'
import pages4 from '../public/pages4.jpg'


const Pages = () => {
  return (
    <div className="px-[5%] mt-40">
        <button className="bg-black text-white p-2 pl-4 pr-14 flex justify-start cursor-text">LANDING PAGES</button>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={pages1} className="h-80"/>
                <p className="mt-2">LANDING 1</p>
            </div>
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={pages2} className="h-80"/>
                <p className="mt-2">LANDING 2</p>
            </div>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={pages3} className="h-80"/>
                <p className="mt-2">LANDING 3</p>
            </div>
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={pages4} className="h-80"/>
                <p className="mt-2">LANDING 4</p>
            </div>
        </div>
    </div>
  )
}

export default Pages
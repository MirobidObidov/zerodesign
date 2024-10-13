import Image from 'next/image'
import cms1 from '../public/cms1.jpg'
import cms2 from '../public/cms2.jpg'
import cms3 from '../public/cms3.jpg'
import cms4 from '../public/cms4.jpg'
import cms5 from '../public/cms5.jpg'
import cms6 from '../public/cms6.jpg'
import cms7 from '../public/cms7.jpg'
import cms8 from '../public/cms8.jpg'
import cms9 from '../public/cms9.jpg'
import cms10 from '../public/cms10.jpg'
import cms11 from '../public/cms11.jpg'


const CMS = () => {
  return (
    <div className="px-[5%] mt-40">
        <button className="bg-black text-white p-2 pl-4 text-lg pr-14 flex justify-start cursor-text">CMS Pages</button>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms1} className="h-80"/>
                <p className="mt-2">WORKS</p>
            </div>
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms2} className="h-80"/>
                <p className="mt-2">BLOG 1</p>
            </div>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms3} className="h-80"/>
                <p className="mt-2">BLOG 2</p>
            </div>
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms4} className="h-80"/>
                <p className="mt-2">BLOG 3</p>
            </div>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms5} className="h-80"/>
                <p className="mt-2">SHOP 1</p>
            </div>
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms6} className="h-80"/>
                <p className="mt-2">SHOP 2</p>
            </div>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms7} className="h-80"/>
                <p className="mt-2">SHOP 3</p>
            </div>
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms8} className="h-80"/>
                <p className="mt-2">SINGLE PRODUCT PAGE</p>
            </div>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms9} className="h-80"/>
                <p className="mt-2">SINGLE POST PAGE</p>
            </div>
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms10} className="h-80"/>
                <p className="mt-2">SINGLE CAREERS PAGE</p>
            </div>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="w-6/12 bg-[#e2e2e2] p-5">
                <Image src={cms11} className="h-80"/>
                <p className="mt-2">SINGLE WORK PAGE</p>
            </div>
        </div>
    </div>
  )
}

export default CMS
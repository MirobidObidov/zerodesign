import Image from "next/image"
import main from '../public/main.png'
import smooth from '../public/smooth.png'
import many from '../public/many.png'
import fully from '../public/fully.png'
import fast from '../public/fast.png'

const Main = () => {
  return (
    <main className="flex items-center justify-between px-[5%]">
        <div>
            <button className="p-1 bg-[#E2B013] text-white cursor-text mb-4">Design addicted</button>
            <h1 className="text-6xl my-3">A stylish UI Kit</h1>
            <h3 className="text-3xl">for all web creatives</h3>
            <p className="my-3">Zero is a Webflow Ecommerce and CMS UI kit including several carefully designed page layouts.</p>
            <div className="flex gap-16 mt-12">
                <div className="w-20 h-20 text-center flex flex-col items-center">
                    <Image src={smooth} className="w-16 h-14 my-2"/>
                    <p>SMOOTH INTERACTIONS</p>
                </div>
                <div className="w-24 h-24 text-center flex flex-col items-center">
                    <Image src={many} className="w-16 h-14 mt-3 mb-[6px]"/>
                    <p>MANY PAGE LAYOUTS</p>
                </div>
                <div className="w-20 h-20 text-center flex flex-col items-center">
                    <Image src={fully} className="w-14 h-14 mb-[1px]"/>
                    <p>FULLY RESPONSIVE</p>
                </div>
                <div className="w-20 h-20 text-center flex flex-col items-center">
                    <Image src={fast} className="w-14 h-14 mb-[1px]"/>
                    <p>FAST CUSTOMIZATION</p>
                </div>
            </div>
        </div>
        <div>
            <Image src={main} className="h-[600px]"/>
        </div>
    </main>
  )
}

export default Main
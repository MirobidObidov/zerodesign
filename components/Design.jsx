import Image from "next/image"
import design from '../public/design.jpg'

const Design = () => {
  return (
    <div className="px-[5%] flex items-center justify-between mt-60">
        <Image src={design} className="w-5/12 mr-10"/>
        <div>
            <h1 className="text-7xl">Zero Design</h1>
            <p className="my-8 font-semibold">Includes a total of 10 static pages, divided like this: 4 Landing pages, 2 About pages, 2 Contact page, 1 Team page, 1 FAQ page. In addition to these, there are Webflow CMS driven pages: Blog (in 2 variations), Shop (in 2 variations), Works and Careers. All with their respective single pages!</p>
            <div className="flex gap-3 my-3">
                <button className="px-6 py-3 bg-black text-white">4 LANDING</button>
                <button className="px-6 py-3 bg-black text-white">2 ABOUT</button>
                <button className="px-6 py-3 bg-black text-white">3 CONTACT</button>
            </div>
            <div className="flex gap-4 mb-4">
                <button className="px-6 py-3 bg-black text-white">3 BLOG</button>
                <button className="px-6 py-3 bg-black text-white">2 SHOP</button>
            </div>
            <div className="flex gap-4 mb-4">
                <button className="px-6 py-3 bg-black text-white">WORKS</button>
                <button className="px-6 py-3 bg-black text-white">TEAM</button>
                <button className="px-6 py-3 bg-black text-white">CAREERS</button>
            </div>
            <div className="flex gap-4 mb-4">
                <button className="px-6 py-3 bg-black text-white">FORMS</button>
                <button className="px-6 py-3 bg-black text-white">UTILITY</button>
            </div>
        </div>
    </div>
  )
}

export default Design
import Image from "next/image";
import Link from "next/link";
import amaryllis from "../../image/WhatsApp Image 2024-11-10 at 3.59.48 PM (1).jpeg"
import staticResume  from "../../image/WhatsApp Image 2024-11-10 at 3.59.40 PM.jpeg"
import portfoli  from "../../image/WhatsApp Image 2024-11-10 at 3.59.48 PM.jpeg"
import figma  from "../../image/WhatsApp Image 2024-11-10 at 3.59.36 PM.jpeg"


export default function Project(){
    return(
        <main className="bg-[#d6d5d1]">
                <div className="text-[#242424] text-3xl font-bold text-center p-10">My Projects</div>
            <div className="max-w-screen-xl mx-auto">
            <div className="flex xl:justify-center xl:flex-row flex-col items-center gap-10 border-solid border-2 border-[#cacacb] rounded-[65px] p-5 mb-5 ">
            <Image src={amaryllis} alt="My Image" className="w-[400px] h-56 rounded-3xl" ></Image>
            <div>
                <div className="text-[#242424] text-3xl font-bold"> First Project</div>
                <div className="text-[#242424] text-2xl font-bold">Amaryllis By Adeena Adnan</div>
                <div className="w-[320px] xl:w-[27rem] py-5 "> I created a simple website using HTML, CSS, and JavaScript. The website displays information about my hobbies and interests. I used HTML to structure the content, CSS to style it, and JavaScript to add some interactive elements like a contact form and a dynamic image slider.</div>
                <a href="https://amaryllis-by-adeena-adnan.vercel.app/"><button className="py-2 px-10 rounded-3xl bg-white font-bold text-[#242424] border-solid border-2 border-[#cacacb]">Visit</button></a>
                <a href="https://github.com/umeradnan7106/amaryllis-by-adeena-adnan"><button className="py-2 px-8 rounded-3xl bg-[#000000D6] font-semibold text-white">GitHub</button></a>
            </div>
            </div>

            <div className="flex justify-center xl:justify-center xl:flex-row flex-col items-center gap-10 border-solid border-2 border-[#cacacb] rounded-[65px] p-5 mb-5">
            <div>
                <div className="text-[#242424] text-3xl font-bold"> Second Project</div>
                <div className="text-[#242424] text-2xl font-bold">Static Resume</div>
                <div className="w-[320px] xl:w-[27rem] py-5">I created a digital resume using HTML, CSS, and JavaScript. Its a modern and interactive way to showcase my skills and experience. You can check it out here:</div>
                <a href="https://static-resume-one.vercel.app/"><button className="py-2 px-10 rounded-3xl bg-white font-bold text-[#242424] border-solid border-2 border-[#cacacb]">Visit</button></a>
                <a href="https://github.com/umeradnan7106/hackathon-resume"><button className="py-2 px-8 rounded-3xl bg-[#000000D6] font-semibold text-white">GitHub</button></a>
            </div>
            <Image src={staticResume} alt="My Image" className="w-[400px] h-56 rounded-3xl" ></Image>
            </div>

            <div className="flex justify-center xl:justify-center xl:flex-row flex-col items-center gap-10 border-solid border-2 border-[#cacacb] rounded-[65px] p-5 mb-5">
            <Image src={portfoli} alt="My Image" className="w-[400px] h-56 rounded-3xl" ></Image>
            <div>
                <div className="text-[#242424] text-3xl font-bold"> Third Project</div>
                <div className="text-[#242424] text-2xl font-bold">Portfolio Design</div>
                <div className="w-[320px] xl:w-[27rem] py-5">I created a portfolio website to showcase my web development skills. It includes several projects I have worked on, such as a personal blog, an e-commerce website and responsive websites. You can check it out here:</div>
                <a href="https://umer-portfolio-swart.vercel.app/"><button className="py-2 px-10 rounded-3xl bg-white font-bold text-[#242424] border-solid border-2 border-[#cacacb]">Visit</button></a>
                <a href="https://github.com/umeradnan7106/umer-portfolio"><button className="py-2 px-8 rounded-3xl bg-[#000000D6] font-semibold text-white">GitHub</button></a>
            </div>
            </div>

            <div className="flex justify-center xl:justify-center xl:flex-row flex-col items-center gap-10 border-solid border-2 border-[#cacacb] rounded-[65px] p-5">
            <div>
                <div className="text-[#242424] text-3xl font-bold"> Forth Project</div>
                <div className="text-[#242424] text-2xl font-bold">Figma Design</div>
                <div className="w-[320px] xl:w-[27rem] py-5">I have built a website using Next.js that looks just like the Figma design. I have carefully crafted a Next.js website that replicates the Figma design. The layout, colors, fonts, and spacing are all very similar to the original design.</div>
                <a href="https://jadoo-tawny.vercel.app/"><button className="py-2 px-10 rounded-3xl bg-white font-bold text-[#242424] border-solid border-2 border-[#cacacb]">Visit</button></a>
                <a href="https://github.com/umeradnan7106/Jadoo"><button className="py-2 px-8 rounded-3xl bg-[#000000D6] font-semibold text-white">GitHub</button></a>
            </div>
            <Image src={figma} alt="My Image" className="w-[400px] h-56 rounded-3xl" ></Image>
            </div>
            </div>
        </main>
    )
}
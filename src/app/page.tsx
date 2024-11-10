import Image from "next/image";
import Link from "next/link";
import myImage from "../image/WhatsApp Image 2024-11-07 at 2.55.05 AM.jpeg";
import skill1 from "../image/icons8-html-250.png";
import skill2 from "../image/icons8-css-250.png";
import skill3 from "../image/icons8-javascript-250.png";
import skill4 from "../image/icons8-tailwind-css-240.png";
import skill5 from "../image/icons8-react-js-250.png";
import skill6 from "../image/icons8-typescript-250.png";
import skill7 from "../image/icons8-node-js-256.png";
import shakehand from "../image/icon_handshake-1.webp";
import email from "../image/icons8-mail-250.png";
import UX from "../image/UX_icon-25-1024.webp";
import monitor from "../image/depositphotos_115258084-stock-illustration-computer-monitor-mouse-and-keyboard-removebg-preview.png";
import development from "../image/backend-development-icon-style-vector-removebg-preview.png"
import creative from "../image/icons8-creative-300.png"
import CV from "../image/umer adnan resume_page-0001.jpg"

export default function Home() {
  return (
    <main className="bg-[#d6d5d1] ">

      <div className="max-w-[1550px] justify-self-center">
      {/* First Section */}

      <div className="bg-[#d6d5d1]">
        <div className="flex justify-between items-center">
          <div className="flex m-5">
            <div className="hidden lg:flex lg:border-solid lg:border-2 lg:border-[#cacacb] lg:rounded-3xl">
              <div className="p-2 text-[#000000D6]">
                umeradnan7106@gmail.com
              </div>
              <div className="py-2 px-8 rounded-3xl bg-white font-bold text-[#242424] ">
                Copy
              </div>
            </div>
            <a href="https://static-resume-one.vercel.app/">
            <div className="py-2 px-10 rounded-3xl bg-white font-bold text-[#242424] ml-1 text-sm sm:text-base">
            CV
            </div>
            </a>
          </div>
          <div className="flex text#000000D6] m-5">
          <div className="text-xs sm:text-base"><a href="https://www.linkedin.com/in/umer-adnan-a1b881291/">LinkedIn/</a></div><div className="text-xs sm:text-base"><a href="https://www.facebook.com/umer.adnan.790">Facebook/</a></div><div className="text-xs sm:text-base"> <Link href="/project">Projects</Link></div>
          </div>
        </div>
        <div className="self-center">
          <Image
            src={myImage}
            alt="myImage"
            className="rounded-full w-32 mx-auto"
          ></Image>
          <div className="text-[#000000D6] text-xl sm:text-3xl font-bold text-center m-5">
            Hello,
            <br /> I am Umer Adnan <br /> Web Developer{" "}
          </div>
          <div className="flex justify-center">
            <button className="py-2 px-8 rounded-3xl bg-[#000000D6] font-semibold text-white mb-20">
            <Link href="/project"> Projects </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white rounded-b-[65px]  rounded-t-[65px] py-20">
      <hr />
        <div className="Button2">
          <button className="py-2 px-10 rounded-3xl bg-white font-bold text-[#242424] border-solid border-2 border-[#cacacb]">
            Skills
          </button>
        </div>
      <div className="flex flex-wrap justify-center mt-7">
        
        <div>
          <Image src={skill1} alt="skills" className="w-32 xl:w-36 mx-6"></Image>
          <div className="skill">HTML5</div>
        </div>
        <div>
          <Image src={skill2} alt="skills" className="w-32 xl:w-36 mx-6"></Image>
          <div className="skill">CSS</div>
        </div>
        <div>
          <Image src={skill3} alt="skills" className="w-32 xl:w-36 mx-6"></Image>
          <div className="skill">JavaScript</div>
        </div>
        <div>
          <Image src={skill4} alt="skills" className="w-32 xl:w-36 mx-6"></Image>
          <div className="skill">Talwind CSS</div>
        </div>
        <div>
          <Image src={skill5} alt="skills" className="w-32 xl:w-36 mx-6"></Image>
          <div className="skill">React Js</div>
        </div>
        <div>
          <Image src={skill6} alt="skills" className="w-32 xl:w-36 mx-6"></Image>
          <div className="skill">TypeScript</div>
        </div>
        <div>
          <Image src={skill7} alt="skills" className="w-32 xl:w-36 mx-6"></Image>
          <div className="skill">Node Js</div>
        </div>
      </div>
      </div>

      {/* Third Section */}

      <div>
        <div className="text-[#242424] text-xl sm:text-3xl font-bold text-center m-20">
          We are use some services to <br /> create impactful design.
        </div>
        <hr />
        <div className="Button">
          <button className="py-2 px-10 rounded-3xl bg-white font-bold text-[#242424] border-solid border-2 border-[#cacacb]">
            Services
          </button>
        </div>

      <div className="lg:flex lg:justify-center">
        <div className="justify-items-center sm:flex sm:space-x-14 justify-center my-16">
          <div className="my-4 w-52">
            <Image src={UX} alt="ux" className="w-10 -m-2"></Image>
            <div className="heading font">UI & UX</div>
            <div className="text-[#848484] w-52">
              Desining interfaces that are intuitive, efficient, and enjoyable
              to use.
            </div>
          </div>

          <div className="my-4 w-52">
          <Image src={monitor} alt="Web" className="w-10 -m-1"></Image>
            <div className="heading">Web & Mobile App</div>
            <div className="text-[#848484] w-52">
              Transforming ideas into exceptional web and mobile app
              experiences.
            </div>
          </div>
          </div>
          <div className="justify-items-center sm:flex sm:space-x-14 justify-center my-16">
          <div className="my-4 w-52">
            <Image src={creative} alt="creative" className="w-10 -m-1"></Image>
            <div className="heading">Design & Creative </div>
            <div className="text-[#848484] w-52">
              Crafting visually stunning designs that connect with your
              audience.
            </div>
          </div>

          <div className=" my-4 w-52">
          <Image src={development} alt="development" className="w-10 -m-1"></Image>
            <div className="heading">Development</div>
            <div className="text-[#848484] w-52">
              Bringing your vision to life wit the latest technology and design
              trends.
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forth Section */}

        <div className="bg-white rounded-t-[65px] pt-16 ">
          <Image
            src={shakehand}
            alt="shakehands"
            className="w-24 mx-auto bg-[#d6d5d1] rounded-full"
          ></Image>
          <div className="text-[#242424] text-xl sm:text-3xl font-bold text-center m-5 ">
            Tell me about your next <br />
            Project
          </div>
          <div className="text-center mb-12">
          <a href="mailto:umeradnan7106@gmail.com">
            <button className="py-2 px-6 rounded-3xl text-white font-bold bg-[#000000D6] border-solid border-2 border-[#cacacb]">
              <Image src={email} alt="email" className="w-6 inline mr-2"></Image>
              Email
            </button>
            </a>
            <a href="https://www.instagram.com/umeradnan626/">
            <button className="py-2 px-5 rounded-3xl bg-white font-bold text-[#242424] border-solid border-2 border-[#cacacb]">
              Instagram
            </button>
            </a>
          </div>
          <hr />

          <div className="flex justify-between m-4">
            <div className="text-[#242424] text-xs sm:text-base">© unique resume.</div>
            <div className="flex text-[#242424]">
            <div className="text-xs sm:text-base"><a href="https://www.linkedin.com/in/umer-adnan-a1b881291/">LinkedIn/</a></div><div className="text-xs sm:text-base"><a href="https://www.facebook.com/umer.adnan.790">Facebook/</a></div><div className="text-xs sm:text-base"> <Link href="/project">Projects</Link></div>
            </div>
          </div>
        </div>

        </div>
    </main>
  );
}

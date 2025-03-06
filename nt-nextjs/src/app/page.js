import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="m-auto flex flex-col items-center justify-between mt-10 max-w-[1440]">
        <Navbar />
        <div className="flex items-center px-1 ">
          <div>
            <h1>
              Assalamu Alaykum Mening ismim Jaxongir hozirda Najot ta'lim o'quv
              markazida Frontent Bootcamp darslarida 7-oy o'qiyapman
            </h1>
          </div>
          <Image
            width={150}
            height={150}
            alt="assa"
            src={`https://my-portfolio-five-drab-90.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg`}
          />
        </div>
      </div>
    </>
  );
}

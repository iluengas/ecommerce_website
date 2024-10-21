import { Smooch } from "next/font/google";

const smooch = Smooch({ weight: "400", subsets: ["latin"] });

export default function CustomFooter({className}) {
  return (
    <footer className={`${className} w-full h-96 bg-white pt-20 mt-20 pb-10  border-black`}>
      <section className={` border-black w-full h-full text-black flex flex-col`}>
        <div className={` border-black ${smooch.className} text-5xl`}>S.G.</div>
        <div className=" border-black text-center mt-4 flex justify-between h-full items-end">
          <div className=" border-black text-black">
            Copyright © 2023 StayGlobal.la - All Rights Reserved.
          </div>
          <div className=" border-black">
            Powered by <span className="font-bold text-yellow-900">Next.js</span>
          </div>
        </div>
      </section>
    </footer>
  );
}

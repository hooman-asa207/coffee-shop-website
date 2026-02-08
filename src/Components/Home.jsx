export default function Home() {
  return (
    <section id="home" className="home h-50 xs:h-auto xs:aspect-2/1 md:aspect-auto overflow-y-hidden bg-[url(../image/headerBgMobile.webp)] md:bg-[url(../image/headerBgDesktop.webp)] bg-no-repeat bg-center bg-cover">
      <div className="container relative h-full md:min-h-screen flex items-center justify-end">
        <div className="text-white">
          <h1 className="font-MorrabbaBold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            قهوه عربیکا تانزانیا
          </h1>
          <h2 className="font-Morrabba text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
            یک فنجان بالانس !
          </h2>
          <span className="block w-25 h-0.5 bg-orange-300 md:my-8 my-3" />
          <span className="block md:text-lg text-xs sm:text-base lg:max-w-115 md:max-w-105 sm:max-w-96 max-w-50">
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت میشود.
          </span>
        </div>
        {/* Circle */}
        <div className="circle circle-lg">
          <div className="circle circle-md">
            <div className="circle circle-sm" />
          </div>
        </div>
      </div>
      <svg className="absolute hidden md:inline-block fill-gray-100 dark:fill-zinc-800 w-25 h-5.5 bottom-0 right-0 left-0 mx-auto">
        <use href="#curve" />
      </svg>
      <div className="hidden md:flex justify-center items-center absolute bottom-0 translate-y-1/2 right-0 left-0 mx-auto size-7.5 border-3 border-orange-300 rounded-full">
        <svg className="stroke-zinc-600 dark:stroke-white size-4 -rotate-90">
          <use href="#chevron" />
        </svg>
      </div>
    </section>
  );
}

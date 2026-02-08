export default function ContactUs() {
  return (
    <section id="contactUs" className="sm:mt-28 mt-7 text-zinc-700 dark:text-white">
      <div className="container">
        <div className="flex items-center sm:flex-row flex-col gap-x-5 gap-y-8">
          <div className="xl:size-75 lg:size-57.5 sm:w-auto w-75 h-auto">
            <img
              className="size-full"
              src="/image/contact.png"
              alt="contact us"
            />
          </div>
          <div>
            <h2 className="font-MorrabbaMedium xl:text-5xl text-4xl">
              یکی از بهترین قهوه ها !
            </h2>
            <h3 className="font-Morrabba xl:text-3xl text-2xl mt-1.5">
              کیفیت قهوه را از ما بخواهید ...
            </h3>
            <span className="text-4xl my-6">...</span>
            <p className="xl:text-xl md:text-lg text-base max-w-237.5 text-justify">
              فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری
              پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده
              است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما
              را می سازد!
            </p>
            <a
              href="#"
              className="flex items-center justify-center mt-6 gap-x-2 w-50 h-14 border-orange-300 border-2 rounded-full text-orange-300"
            >
              <svg className="size-6 fill-orange-300">
                <use href="#phone" />
              </svg>
              ثبت سفارش تلفنی
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

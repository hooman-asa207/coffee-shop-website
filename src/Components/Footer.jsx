function Footer() {
  return (
    <section id="footer" className="relative bg-zinc-700 sm:px-10 px-4 sm:pt-15.5 pt-8 text-gray-300">
      {/* Curve and Chevrone */}
      <svg className="absolute hidden md:inline-block fill-gray-100 dark:fill-zinc-800 w-25 h-5.5 top-0 rotate-180 right-0 left-0 mx-auto">
        <use href="#curve" />
      </svg>
      <div className="hidden md:flex justify-center items-center absolute top-0 -translate-y-1/2 right-0 left-0 mx-auto size-7.5 border-3 border-orange-300 rounded-full">
        <svg className="stroke-zinc-600 dark:stroke-white size-4 rotate-90">
          <use href="#chevron" />
        </svg>
      </div>
      <div className="flex items-start justify-between flex-wrap lg:gap-x-15 gap-y-11">
        <div className="xl:max-w-1/3 max-w-full">
          <div className="flex items-center gap-x-5">
            <svg className="w-14 h-13 fill-gray-300">
              <use href="#logo" />
            </svg>
            <svg className="w-34.5 h-14 fill-gray-300">
              <use href="#logo-type" />
            </svg>
          </div>
          <p className="mt-4.5 sm:leading-12 leading-7 text-justify text-lg">
            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات
            و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه
            در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت
            به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-DanaDemibold text-2xl mb-7 text-white">
            دسترسی سریع
          </h4>
          <div className="flex items-center lg:gap-x-20 gap-x-10 xl:mr-0 sm:mr-8 mr-4">
            <ul className="footer-list *:relative *:cursor-pointer *:hover:text-orange-300 flex flex-col gap-y-5">
              <li>پرسش های متداول</li>
              <li>فرصت های شغلی</li>
              <li>ضمانت نامه ها</li>
              <li>ارتباط با ما</li>
            </ul>
            <ul className="footer-list *:relative *:cursor-pointer *:hover:text-orange-300 flex flex-col gap-y-5">
              <li>حریم خصوصی</li>
              <li>عودت کالا</li>
              <li>شرایط استفاده</li>
              <li>ثبت سفارش</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="font-DanaDemibold text-2xl mb-7 text-white">
            در تماس باشیم
          </h4>
          <span className="flex flex-row-reverse item-center gap-x-3 justify-end">
            بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
            <svg className="size-6 stroke-gray-300 fill-transparent">
              <use href="#location" />
            </svg>
          </span>
          <div className="flex sm:items-center gap-5 mt-5 sm:flex-row flex-col">
            <a
              href="mailto:info@Coffee.com"
              className="flex items-center gap-x-3 text-orange-300"
            >
              <svg className="size-6 stroke-orange-300 fill-transparent">
                <use href="#envelope" />
              </svg>
              info@Coffee.com
            </a>
            <div className="flex items-center gap-x-5">
              <span className="flex items-center gap-x-3" dir="ltr">
                0902 123 6628
                <svg className="size-5 stroke-gray-300 fill-transparent">
                  <use href="#phone" />
                </svg>
              </span>
              <span dir="ltr">021 - 6789012</span>
            </div>
          </div>
          <div className="flex items-center justify-center sm:gap-x-5 gap-x-1.5 mt-10 font-DanaMedium text-lg">
            <a
              href="#"
              className="sm:w-50 grow h-12 rounded-xl flex justify-center items-center text-orange-200 gap-x-2 border border-orange-300"
            >
              <svg
                width={39}
                height={38}
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7405 5.9375C9.52393 5.9375 6.05884 9.39795 6.05884 13.6191V24.3809C6.05884 28.5974 9.51929 32.0625 13.7405 32.0625H24.5022C28.7188 32.0625 32.1838 28.6021 32.1838 24.3809V13.6191C32.1838 9.40259 28.7234 5.9375 24.5022 5.9375H13.7405ZM13.7405 8.3125H24.5022C27.4385 8.3125 29.8088 10.6829 29.8088 13.6191V24.3809C29.8088 27.3171 27.4385 29.6875 24.5022 29.6875H13.7405C10.8042 29.6875 8.43384 27.3171 8.43384 24.3809V13.6191C8.43384 10.6829 10.8042 8.3125 13.7405 8.3125ZM26.135 10.9102C25.5366 10.9102 25.0588 11.3879 25.0588 11.9863C25.0588 12.5847 25.5366 13.0625 26.135 13.0625C26.7334 13.0625 27.2112 12.5847 27.2112 11.9863C27.2112 11.3879 26.7334 10.9102 26.135 10.9102ZM19.1213 11.875C15.2017 11.875 11.9963 15.0803 11.9963 19C11.9963 22.9197 15.2017 26.125 19.1213 26.125C23.041 26.125 26.2463 22.9197 26.2463 19C26.2463 15.0803 23.041 11.875 19.1213 11.875ZM19.1213 14.25C21.7607 14.25 23.8713 16.3606 23.8713 19C23.8713 21.6394 21.7607 23.75 19.1213 23.75C16.4819 23.75 14.3713 21.6394 14.3713 19C14.3713 16.3606 16.4819 14.25 19.1213 14.25Z"
                  fill="#FED7AA"
                />
              </svg>
              <span className="pt-2 sm:text-base text-sm" dir="ltr">
                @golden_coffee
              </span>
            </a>
            <a
              href="#"
              className="sm:w-50 grow h-12 rounded-xl flex justify-center items-center text-zinc-700 bg-linear-270 from-orange-200 to-orange-300 gap-x-2"
            >
              <svg
                width={38}
                height={38}
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.0136 7.9292C32.3492 7.9292 32.7007 8.93937 32.3056 11.3112C31.8536 14.0234 30.5513 23.0033 29.5126 28.5933C29.1152 30.7324 28.3988 31.6547 27.3561 31.6547C26.783 31.6547 26.1116 31.376 25.3405 30.867C24.2955 30.1766 19.0199 26.6877 17.8743 25.8684C16.8293 25.1218 15.3877 24.2233 17.1959 22.4547C17.8395 21.8245 22.0567 17.7973 25.3421 14.6631C25.6928 14.3282 25.3991 13.8176 25.0096 13.8176C24.921 13.8176 24.8268 13.8445 24.7349 13.9055C20.3063 16.8426 14.1654 20.9189 13.384 21.4501C12.6026 21.9805 11.841 22.3209 10.8261 22.3209C10.3076 22.3209 9.72255 22.2322 9.03459 22.0343C7.49638 21.5926 5.99459 21.0661 5.40955 20.865C3.15726 20.0924 3.69163 19.0909 5.87901 18.1282C14.6491 14.2704 25.9976 9.56637 27.5643 8.91562C29.0907 8.28149 30.2243 7.9292 31.0136 7.9292ZM31.0136 5.5542C29.9306 5.5542 28.6268 5.90332 26.6547 6.72112L26.418 6.81928C17.9986 10.3153 10.3646 13.5595 4.92267 15.9535C4.07242 16.328 1.48605 17.4656 1.58659 19.8454C1.62934 20.8722 2.19459 22.2718 4.63926 23.1102L4.81976 23.172C5.50217 23.4071 6.92322 23.8971 8.37988 24.3159C9.26655 24.5708 10.0677 24.6943 10.8269 24.6943C12.1443 24.6943 13.1647 24.3183 13.9627 23.8805C13.9588 24.0135 13.9619 24.1473 13.9722 24.2819C14.1163 26.1122 15.5318 27.116 16.3773 27.7161L16.4953 27.8C17.7437 28.693 23.3938 32.4257 24.0335 32.8477C25.2376 33.6425 26.3246 34.0281 27.3577 34.0281C28.9822 34.0281 31.0809 33.1604 31.8488 29.0263C32.578 25.1052 33.4203 19.6277 34.0354 15.6282C34.2975 13.9213 34.5128 12.5217 34.6498 11.7007C34.9261 10.0429 35.0527 8.16512 33.8993 6.80424C33.4148 6.23424 32.5218 5.5542 31.0136 5.5542Z"
                  fill="#3F3F46"
                />
              </svg>
              <span className="pt-2 sm:text-base text-sm" dir="ltr">
                @golden_coffee
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-right lg:flex-row flex-col gap-y-5 mt-11 py-11 border-t border-white/10">
        <div className="flex items-center gap-x-2.5">
          {/* Circle */}
          <div className="flex justify-center items-center size-7.5 rounded-full border border-zinc-600 shrink-0">
            <div className="flex justify-center items-center size-5 rounded-full border border-zinc-600">
              <div className="size-2.5 rounded-full bg-orange-300" />
            </div>
          </div>
          <span className="xl:text-base sm:text-sm text-xs">
            تمام حقوق این رابط کاربری متعلق به
            <span className="text-orange-200">سبزلرن</span> میباشد و دانشجوی این
            دوره اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.
          </span>
        </div>
        <span className="xl:text-base sm:text-sm text-xs text-left" dir="ltr">
          Copyright © 2023 Golden Coffee. All rights reserved
        </span>
      </div>
    </section>
  );
}

export default Footer;

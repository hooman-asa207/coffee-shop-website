function Services() {
  return (
    <section  className="services md:mt-28 mt-16" id="services">
      <div className="container">
        <div className="flex items-center flex-wrap justify-between *:lg:w-auto *:w-1/2 lg:gap-x-24 gap-y-11 text-zinc-700 dark:text-white">
          <div className="flex items-center flex-col sm:flex-row gap-y-5 text-center lg:text-right gap-x-4">
            <img
              className="dark:hidden"
              src="./image/svgs/services/pitcher.svg"
              alt="pitcher"
            />
            <img
              className="hidden dark:inline-block"
              src="./image/svgs/services/pitcher-dark.svg"
              alt="pitcher"
            />
            <div>
              <h4 className="sm:text-lg text-sm font-DanaMedium">
                اکسسوری قهوه
              </h4>
              <span className="sm:text-sm text-xs">وسایل و ادوات دم آوری</span>
            </div>
          </div>
          <div className="flex items-center flex-col sm:flex-row gap-y-5 text-center lg:text-right gap-x-4">
            <img
              className="dark:hidden"
              src="./image/svgs/services/express-delivery.svg"
              alt="pitcher"
            />
            <img
              className="hidden dark:inline-block"
              src="./image/svgs/services/express-delivery-dark.svg"
              alt="pitcher"
            />
            <div>
              <h4 className="sm:text-lg text-sm font-DanaMedium">
                امکان تحویل اکسپرس
              </h4>
              <span className="sm:text-sm text-xs">وسایل و ادوات دم آوری</span>
            </div>
          </div>
          <div className="flex items-center flex-col sm:flex-row gap-y-5 text-center lg:text-right gap-x-4">
            <img
              className="dark:hidden"
              src="./image/svgs/services/coffee.svg"
              alt="pitcher"
            />
            <img
              className="hidden dark:inline-block"
              src="./image/svgs/services/coffee-dark.svg"
              alt="pitcher"
            />
            <div>
              <h4 className="sm:text-lg text-sm font-DanaMedium">رست تخصصی</h4>
              <span className="sm:text-sm text-xs">
                تازه برشته شده و با کیفیت
              </span>
            </div>
          </div>
          <div className="flex items-center flex-col sm:flex-row gap-y-5 text-center lg:text-right gap-x-4">
            <img
              className="dark:hidden"
              src="./image/svgs/services/support.svg"
              alt="pitcher"
            />
            <img
              className="hidden dark:inline-block"
              src="./image/svgs/services/support-dark.svg"
              alt="pitcher"
            />
            <div>
              <h4 className="sm:text-lg text-sm font-DanaMedium">
                پشتیبانی شبانه روزی
              </h4>
              <span className="sm:text-sm text-xs">7 روز هفته ، 24 ساعته</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
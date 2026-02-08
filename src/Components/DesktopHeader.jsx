import "../index.css";
import { CartProduct } from "./CartProduct";
import ThemeToggler from "./ThemeToggler";

export default function DesktopHeader({
  theme,
  toggleTheme,
  showText,
  products,
  totalPrice,
  onRemove
}) {
  return (
    <header className="fixed md:flex hidden items-center z-20 bg-black/50 lg:w-9/10 w-95/100 h-24 top-9 left-5/10 translate-x-[-50%] lg:px-10 px-5 rounded-3xl text-gray-200 backdrop-blur-[5px]">
      <div className="flex justify-between items-center blur-none w-full">
        {/* navbar and logo */}
        <nav className="flex items-center gap-x-9 h-14">
          <img src="./image/app-logo.png" alt="logo" />
          <ul className="flex items-center gap-x-6 lg:gap-x-9 h-full leading-14 *:hover:text-orange-300 *:transition-colors">
            <li>
              <a href="#" className="text-orange-300">
                صفحه اصلی
              </a>
            </li>
            {/* has sidebar */}
            <li className="relative group">
              <a
                href="#"
                className="group-hover:text-orange-300 transition-colors"
              >
                فروشگاه
              </a>
              {/* sidebar */}
              <div className="flex flex-col absolute w-52 h-68 leading-6 transition-all delay-75 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible shadow-primary dark:bg-zinc-700 gap-y-4 py-5.5 px-6 rounded-2xl border-t-3 border-t-orange-300 bg-white text-zinc-700 *:transition-colors *:hover:text-orange-300 *:dark:text-white">
                <a href="#">قهوه ویژه</a>
                <a href="#">ویژه در سطح جهانی</a>
                <a href="#">قهوه درجه یک</a>
                <a href="#">ترکیبات تجاری</a>
                <a href="#">کپسول قهوه</a>
                <a href="#">قهوه زینو برزیلی</a>
              </div>
            </li>
            <li>
              <a href="#">دیکشنری</a>
            </li>
            <li>
              <a href="#">بلاگ</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </nav>
        {/* login and cart and theme toggle */}
        <div className="flex items-center lg:gap-x-5 gap-x-3 h-14">
          {/*cart and theme toggle */}
          <div className="flex items-center justify-center h-full gap-x-2 lg:w-30 w-24 border-l-2 border-l-white/20">
            {/* has sidebar */}
            <div className="relative h-full flex items-center justify-center w-10 group">
              <svg className="size-6 2xl:size-8 stroke-orange-200 cursor-pointer">
                <use href="#shopping-cart" />
              </svg>
              {/* sidebar */}

              <div className="absolute top-10/10 shadow-primary left-1/10 flex flex-col items-center rounded-3xl delay-100 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all  border-t-3 font-DanaMedium border-t-orange-300 w-100 max-h-117.5 bg-white text-zinc-700 dark:bg-zinc-700 dark:text-white">
                <header className="flex items-center justify-between flex-row-reverse w-full text-xs pb-3 px-5 pt-5">
                  <a href="#" className="flex items-center text-orange-300">
                    مشاهده سبد خرید
                    <svg className="size-4.5 fill-orange-300">
                      <use href="#chevron-mini" />
                    </svg>
                  </a>
                  <span className="text-gray-400">{products.length} مورد</span>
                </header>

                {products.length > 0 ? (
                  <main className="custom-scrollbar overflow-y-auto divide-y divide-gray-200 mx-3 *:flex *:items-center *:mb-6 *:not-last:pb-1 *:gap-x-2.5">
                    {products.map((product) => (
                      <CartProduct key={product.id} {...product} onRemove={onRemove}/>
                    ))}
                  </main>
                ) : (
                  <>
                    <main className="flex flex-col items-center justify-center">
                      <span>سبد خرید شما خالیست :)</span>
                      <img
                        src="../../public/image/svgs/empty-cart.svg"
                        alt=""
                        className="w-32"
                      />
                    </main>
                  </>
                )}

                {products.length > 0 && (
                  <footer className="flex items-center flex-row-reverse w-full justify-between p-5 border-t-gray-300 border-t">
                    <a
                      href="#"
                      className="font-Dana transition-colors bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 py-3.5 px-7 text-white rounded-xl"
                    >
                      ثبت سفارش
                    </a>
                    <div>
                      <p className="text-xs text-gray-400">مبلغ قابل پرداخت</p>
                      <p className="text-xl font-DanaDemibold mt-1">
                        {totalPrice}
                        <span className="font-DanaMedium text-base">تومان</span>
                      </p>
                    </div>
                  </footer>
                )}
              </div>
            </div>
            <ThemeToggler
              theme={theme}
              toggleTheme={toggleTheme}
              showText={showText}
            />
          </div>
          <a
            href="#"
            className="flex items-center gap-x-2.5 xl:px-5 h-12 rounded-3xl text-orange-200 xl:hover:bg-orange-200/10 transition-all"
          >
            <svg className="size-6 stroke-orange-200">
              <use href="#login" />
            </svg>
            <span className="hidden xl:inline-block">ورود | ثبت نام</span>
          </a>
        </div>
      </div>
    </header>
  );
}

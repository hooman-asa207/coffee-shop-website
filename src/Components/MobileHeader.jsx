import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { CartProduct } from "./CartProduct";

export default function MobileHeader({
  theme,
  toggleTheme,
  showText,
  products,
  totalPrice,
  onRemove
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const overlay = document.querySelector("#overlay");

  useEffect(() => {
    overlay.classList.toggle("fixed", isMenuOpen);
    overlay.classList.toggle("hidden", !isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    overlay.classList.toggle("fixed", isCartOpen);
    overlay.classList.toggle("hidden", !isCartOpen);
  }, [isCartOpen]);

  return (
    <div className="bg-white dark:bg-zinc-700 w-full h-16 md:hidden flex items-center justify-between px-4">
      {/* menu icon */}
      <div id="mobile-nav-menu--open" onClick={() => setIsMenuOpen(true)}>
        <svg className="stroke-zinc-700 dark:stroke-white size-7 cursor-pointer">
          <use href="#bars-3" />
        </svg>
      </div>

      {/* menu */}
      <div
        id="mobile-nav-menu"
        className={`${isMenuOpen ? `right-0` : `-right-65`}  bg-white dark:bg-zinc-700 text-zinc-600 transition-all overflow-y-auto dark:text-white fixed
      w-64 px-4 pb-15 h-screen top-0 z-20`}
      >
        <header className="flex items-center justify-between pt-3 pb-5 border-b border-gray-300 dark:border-white/10">
          <div className="flex items-center gap-x-3.5">
            <img className="size-10" src="./image/app-logo.png" alt="logo" />
            <svg className="w-25 h-13 fill-orange-300">
              <use href="#logo-type" />
            </svg>
          </div>
          <svg
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="size-5 stroke-zinc-600 dark:stroke-white"
            id="mobile-nav-menu--close"
          >
            <use href="#x-btn" />
          </svg>
        </header>
        <main
          className="border-b border-gray-300 dark:border-white/10 pb-8"
          dir="ltr"
        >
          <ul className="space-y-6 mt-8">
            <li className="bg-orange-200/20 pr-2.5 py-2 rounded-md">
              <a
                className="flex items-center gap-x-2 flex-row-reverse"
                href="#"
              >
                <svg className="size-5 stroke-zinc-600 dark:stroke-white">
                  <use href="#home" />
                </svg>
                صفحه اصلی
              </a>
            </li>
            {/* has submenu */}
            <li className="mobile-nav-item pr-2">
              <a
                className="flex items-center justify-between gap-x-2 flex-row-reverse"
                href="#"
              >
                <span className="flex items-center gap-x-2 flex-row-reverse">
                  <svg className="size-5 stroke-zinc-600 dark:stroke-white">
                    <use href="#shopping-bag" />
                  </svg>
                  فروشگاه
                </span>
                <svg className="size-5 -rotate-90 transition-all">
                  <use href="#chevron" />
                </svg>
              </a>
              {/* submenu */}
              <ul className="mobile-nav-submenu">
                <li>
                  <a href="#">قهوه ویژه</a>
                </li>
                <li>
                  <a href="">ویژه در سطح جهانی</a>
                </li>
                <li>
                  <a href="">قهوه درجه یک</a>
                </li>
                <li>
                  <a href="">ترکیبات تجاری</a>
                </li>
                <li>
                  <a href="">کپسول قهوه</a>
                </li>
                <li>
                  <a href="">قهوه زینو برزیلی</a>
                </li>
              </ul>
            </li>
            <li className="pr-2">
              <a
                className="flex items-center gap-x-2 flex-row-reverse"
                href="#"
              >
                <svg className="size-5 stroke-zinc-600 dark:stroke-white">
                  <use href="#chat" />
                </svg>
                دیکشنری
              </a>
            </li>
            <li className="pr-2">
              <a
                className="flex items-center gap-x-2 flex-row-reverse"
                href="#"
              >
                <svg className="size-5 stroke-zinc-600 dark:stroke-white">
                  <use href="#briefcase" />
                </svg>
                درباره ما
              </a>
            </li>
            <li className="pr-2">
              <a
                className="flex items-center gap-x-2 flex-row-reverse"
                href="#"
              >
                <svg className="size-5 stroke-zinc-600 dark:stroke-white">
                  <use href="#document" />
                </svg>
                بلاگ
              </a>
            </li>
            <li className="pr-2">
              <a
                className="flex items-center gap-x-2 flex-row-reverse"
                href="#"
              >
                <svg className="size-5 stroke-zinc-600 dark:stroke-white">
                  <use href="#phone-with-arrow" />
                </svg>
                تماس با ما
              </a>
            </li>
          </ul>
        </main>
        <footer className="flex flex-col items-start gap-y-6 mt-8">
          <a
            className="flex items-center gap-x-2 flex-row-reverse text-orange-300"
            href="#"
          >
            ورود | ثبت نام
            <svg className="size-5 stroke-orange-300">
              <use href="#login" />
            </svg>
          </a>
          <ThemeToggler
            classList={
              "flex items-center gap-x-2 flex-row-reverse text-orange-300"
            }
            theme={theme}
            toggleTheme={toggleTheme}
            showText={showText}
          />
          <button className="flex items-center gap-x-2 flex-row-reverse text-orange-300">
            سبد خرید
            <svg className="size-5 stroke-orange-300">
              <use href="#shopping-cart" />
            </svg>
          </button>
        </footer>
      </div>
      {/* logo */}
      <div>
        <svg
          className="w-25 h-14 fill-orange-300 inline-block"
          id="mobile-nav-logo"
        >
          <use href="#logo-type" />
        </svg>
      </div>
      {/* cart icon */}
      <div onClick={() => setIsCartOpen(true)}>
        <svg
          className="stroke-zinc-700 dark:stroke-white size-7 cursor-pointer"
          id="mobile-cart-menu--open"
        >
          <use href="#shopping-cart" />
        </svg>
      </div>
      {/* cart */}
      <div
        id="mobile-cart-menu"
        className={`${isCartOpen ? "left-0" : "-left-65"} bg-white flex flex-col dark:bg-zinc-700 text-zinc-600 transition-all pb-4 font-DanaMedium dark:text-white fixed w-64 h-screen top-0 z-20`}
      >
        <header className="flex items-center px-4 justify-between h-16 border-b border-gray-300 dark:border-white/10">
          <svg
            onClick={() => setIsCartOpen(false)}
            className="size-5 stroke-zinc-600 dark:stroke-white"
            id="cart-menu--close"
          >
            <use href="#x-btn" />
          </svg>
          <span>سبد خرید</span>
        </header>
        {products.length > 0 ? (
          <main className="custom-scrollbar overflow-y-auto divide-y px-2 divide-gray-200 dark:divide-white/10 *:flex *:items-center *:mt-5 *:pb-5">
            {products.map((product) => (
              <CartProduct.Mobile key={product.id} {...product} onRemove={onRemove}/>
            ))}
          </main>
        ) : (
          <main className="flex flex-col justify-center items-center mt-10">
            <h3 className="text-lg font-DanaDemibold">سبد خرید شما خالیست :)</h3>
            <img src="./image/svgs/empty-cart.svg" alt=""  className="w-32"/>
          </main>
        )}
        {products.length > 0 && (
          <footer className="flex items-center px-4 flex-row-reverse w-full justify-between mt-auto pt-5 border-t border-gray-300">
            <a
              href="#"
              className="flex items-center justify-center font-Dana transition-colors w-28 h-11 bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-xl"
            >
              ثبت سفارش
            </a>
            <div>
              <p className="text-xs text-gray-400">مبلغ قابل پرداخت</p>
              <p className="font-DanaDemibold mt-1">
                {totalPrice} <span className="font-Dana text-sm">تومان</span>
              </p>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}

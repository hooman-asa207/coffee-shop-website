import toast from "react-hot-toast";

export default function Product({ onAdd, ...props }) {
  const notify = () => toast.success("محصول به سبد خرید اضافه شد");

  return (
    <div className=" bg-white dark:bg-zinc-700 xs:p-3 p-2 rounded-2xl shadow-primary">
      <header>
        <img className="sm:w-65 w-32 mx-auto" src={props.image} alt="product" />
      </header>
      <main className="mb-5">
        <p className="font-DanaMedium sm:text-xl xs:text-lg text-sm line-clamp-2">
          {props.title}
        </p>
        {props.priceWithDiscount && props.inStock ? (
          <div className="flex items-center sm:gap-x-2.5 gap-x-2 mt-3">
            <p className="font-DanaDemibold sm:text-xs xs:text-lg text-sm md:text-base text-teal-600 dark:text-emerald-500">
              {props.priceWithDiscount.toLocaleString("en-US")}
              <span className="font-Dana sm:text-base text-xs">تومان</span>
            </p>
            <p className="line relative font-DanaMedium sm:text-xs xs:text-base md:text-base text-xs text-gray-400">
              {props.price.toLocaleString("en-US")}
              <span className="sm:inline-block hidden font-Dana sm:text-xs md:text-base">
                تومان
              </span>
            </p>
          </div>
        ) : !props.priceWithDiscount && props.inStock ? (
          <p className="font-DanaDemibold sm:text-xl xs:text-lg text-sm text-teal-600 dark:text-emerald-500 mt-3">
            {props.price.toLocaleString("en-US")}
            <span className="font-Dana sm:text-base text-xs">تومان</span>
          </p>
        ) : null}
        {!props.inStock && (
          <p className="font-DanaDemibold sm:text-xl xs:text-lg text-sm text-red-400 dark:text-emerald-500 mt-3">
            فعلا موجود نیست
          </p>
        )}
      </main>
      <footer className="flex items-center justify-between">
        <div className="flex items-center sm:gap-x-3 gap-x-2">
          <div
            onClick={() => {
              onAdd(props.id)
              notify()
            }}
            className="md:size-9 size-7 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer dark:bg-zinc-800 dark:hover:bg-emerald-500 hover:bg-teal-600 transition-colors hover:*:stroke-white"
          >
            <svg className="md:size-6 size-5 stroke-gray-400">
              <use href="#shopping-cart" />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg className="size-5 md:size-6 stroke-gray-400 hover:stroke-teal-600 dark:hover:stroke-emerald-500 transition-colors">
              <use href="#arrows-right-left" />
            </svg>
          </div>
        </div>
        <div className="*:size-4 md:*:size-6 *:fill-transparent flex flex-row-reverse items-center">
          <svg className="stroke-yellow-400">
            <use href="#star" />
          </svg>
          <svg className="stroke-yellow-400">
            <use href="#star" />
          </svg>
          <svg className="stroke-yellow-400">
            <use href="#star" />
          </svg>
          <svg className="stroke-yellow-400">
            <use href="#star" />
          </svg>
          <svg className="stroke-gray-300">
            <use href="#star" />
          </svg>
        </div>
      </footer>
    </div>
  );
}

import toast from "react-hot-toast";

function CartProduct({ onRemove, ...props }) {
  const notify = () => toast.success("محصول از سبد خرید حذف شد");

  return (
    <div className="pl-2">
      <div className="w-30 shrink-0">
        <img className="w-full" src={props.image} alt="product" />
      </div>
      <div className="flex flex-col">
        <h4 className="line-clamp-2">{props.title}</h4>
        <div className="flex items-center justify-between mt-6">
          <p className="text-xl font-DanaDemibold">
            {props.price.toLocaleString("en-US")}{" "}
            <span className="font-Dana text-base">تومان</span>
          </p>
          <div
            onClick={() => {
              onRemove(props.id);
              notify();
            }}
            className="p-2 rounded-xl bg-gray-200 dark:bg-zinc-600 hover:bg-red-500 hover:*:text-white transition-colors cursor-pointer"
          >
            <svg className="text-zinc-700 dark:text-gray-300 size-5 transition-colors">
              <use href="#trash"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

CartProduct.Mobile = function ({ onRemove, ...props }) {
  const notify = () => toast.success("محصول از سبد خرید حذف شد");
  return (
    <div>
      <div className="size-22.5">
        <img className="size-22.5" src={props.image} alt="product" />
      </div>
      <div className="max-w-30">
        <h4 className="text-sm line-clamp-2">{props.title}</h4>
        <div className="flex items-center justify-between mt-3">
          <p className="font-DanaDemibold">
            {props.price.toLocaleString("en-US")}{" "}
            <span className="font-Dana">تومان</span>
          </p>

          <div
            onClick={() => {
              onRemove(props.id);
              notify();
            }}
            className="hover:*:text-red-600 transition-colors cursor-pointer"
          >
            <svg className="text-zinc-700 size-4 transition-colors">
              <use href="#trash"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartProduct };

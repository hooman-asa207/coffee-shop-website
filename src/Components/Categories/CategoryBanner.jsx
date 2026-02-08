import Category from "./Category";

export default function CategoryBanner() {
  const categories = [
    {
      id: crypto.randomUUID(),
      title: "قهوه ترک",
      image: "./image/categories/category1.png",
    },
    {
      id: crypto.randomUUID(),
      title: "لوازم جانبی و تجهیزات",
      image: "./image/categories/category2.png",
    },
    {
      id: crypto.randomUUID(),
      title: "اسپرسو ساز",
      image: "./image/categories/category3.png",
    },
    {
      id: crypto.randomUUID(),
      title: "پک تستر قهوه",
      image: "./image/categories/category4.png",
    },
    {
      id: crypto.randomUUID(),
      title: "قهوه دمی و اسپرسو",
      image: "./image/categories/category5.png",
    },
  ];

  return (
    <section id="category" className="sm:mt-20 mt-8">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="category-left">
            <h4 className="font-DanaDemibold md:text-4xl sm:text-3xl text-2xl">
              انواع قهوه
            </h4>
            <p className="font-DanaMedium md:text-xl sm:text-lg sm:mt-7 mt-5">
              ترکیبی و تک خاستگاه
            </p>
          </div>
          <div className="category-right">
            <h4 className="font-DanaDemibold md:text-4xl sm:text-3xl text-2xl">
              پودر های فوری
            </h4>
            <p className="font-DanaMedium md:text-xl sm:text-lg sm:mt-7 mt-5">
              نسکافه ، هات چاکلت ، ماسالا
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap sm:gap-x-15 gap-x-7 gap-y-6 sm:mt-20 mt-8 font-DanaDemibold sm:text-xl text-sm text-zinc-700 dark:text-white">
          {categories.map((category) => (
            <Category key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

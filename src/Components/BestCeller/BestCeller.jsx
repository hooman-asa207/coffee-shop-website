import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Product from "../Product";
import products from "./data";
import SectionHead from "../SectionHead";

import "swiper/css";
import "swiper/css/navigation";

export default function BestCeller() {
  return (
    <section id="bestCeller" className="sm:mt-20 mt-8">
      <div className="container">
        <SectionHead
          title={"محصولات پر فروش"}
          description={"پیشنهاد قهوه خور ها ..."}
        >
          {/* Navigations */}
          <div className="flex items-center xs:gap-x-4.5 gap-x-3">
            <button className="swiper-button-prev-custom group xs:p-2 p-1.5 xs:size-11 size-8 bg-white transition-colors hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-white rounded-full cursor-pointer">
              <svg className="xs:size-7 size-5 fill-zinc-700 dark:fill-white dark:group-hover:fill-zinc-700 transition-colors rotate-180">
                <use href="#chevron-mini" />
              </svg>
            </button>
            <button className="swiper-button-next-custom group xs:p-2 p-1.5 xs:size-11 size-8 bg-white transition-colors hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-white rounded-full cursor-pointer">
              <svg className="xs:size-7 size-5 fill-zinc-700 dark:fill-white dark:group-hover:fill-zinc-700 transition-colors">
                <use href="#chevron-mini" />
              </svg>
            </button>
          </div>
        </SectionHead>
        {/* main */}
        <div className="swiper text-zinc-700 dark:text-white">
          {/* Slides */}

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Product {...product}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

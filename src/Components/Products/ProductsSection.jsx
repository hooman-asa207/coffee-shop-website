import products from "./data/products";
import Product from "../Product";
import SectionHead from "../SectionHead";

export default function ProductsSection({onAdd}) {
  return (
    <section id="products" className="products text-zinc-700 dark:text-white sm:pt-35 pt-8">
      <div className="container">
        {/* Head */}
        <SectionHead
          title={"جدیدترین محصولات"}
          description={"فرآوری شده از دانه قهوه"}
        />
        {/* Body */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xs:gap-5 gap-2">
          {products.map((product) => (
            <Product key={product.id} {...product} onAdd={onAdd}/>
          ))}
        </div>
      </div>
    </section>
  );
}

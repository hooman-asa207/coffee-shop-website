import SectionHead from "../SectionHead";
import Blog from "./Blog";

export default function BlogsSection() {
  const blogsData = [
    {
      id: crypto.randomUUID(),
      title: "طرز تهیه قهوه دمی با دستگاه اروپرس",
      image: "./image/blogs/blog-1.png",
      date: {
        day: "21",
        month: "مرداد",
        year: "1403",
      },
      href: "#",
    },
    {
      id: crypto.randomUUID(),
      title: "یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
      image: "./image/blogs/blog-2.png",
      date: {
        day: "21",
        month: "مرداد",
        year: "1403",
      },
      href: "#",
    },
    {
      id: crypto.randomUUID(),
      title: "طرز تهیه یک فنجان کافه زینو برزیلی",
      image: "./image/blogs/blog-3.png",
      date: {
        day: "21",
        month: "مرداد",
        year: "1403",
      },
      href: "#",
    },
    {
      id: crypto.randomUUID(),
      title: "طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی",
      image: "./image/blogs/blog-4.png",
      date: {
        day: "21",
        month: "مرداد",
        year: "1403",
      },
      href: "#",
    },
  ];

  return (
    <section id="blogs" className="sm:mt-20 mt-8">
      <div className="container">
        {/* Head */}
        <SectionHead title={"مطالب خواندنی"} description={null}/>
        
        {/* Main */}
        <div className="grid xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-x-5 gap-y-3.5">
          {blogsData.map((blogData) => (
            <Blog key={blogData.id} {...blogData} />
          ))}
        </div>
      </div>
    </section>
  );
}

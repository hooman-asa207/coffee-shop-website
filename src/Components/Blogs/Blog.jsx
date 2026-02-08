export default function Blog({ ...props }) {
    
  return (
    <div className="flex xs:flex-col justify-center gap-x-2.5 rounded-2xl bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white shadow-primary px-3 pt-3 pb-2">
      <div className="relative group xs:aspect-2/1 xs:size-auto size-32.5 cursor-pointer">
        <img
          className="rounded-2xl rounded-bl-4xl size-full object-cover"
          src={props.image}
          alt="blog"
        />
        <div className="absolute size-full xs:flex hidden items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all rounded-2xl rounded-bl-4xl inset-0 bg-linear-90 from-orange-200/80 to-orange-300/80">
          <svg className="w-34.5 h-13.5 fill-amber-900">
            <use href="#logo-type" />
          </svg>
        </div>
      </div>

      <div className="flex xs:flex-row flex-col justify-between xs:mt-4 xs:pl-4.5 pl-2.5">
        <p className="xs:font-Dana font-DanaMedium max-w-48.25  leading-7 lg:text-lg md:text-sm sm:text-lg text-sm line-clamp-2">
          {props.title}
        </p>
        <div className="xs:inline-block flex items-center justify-between">
          <div className="flex xs:flex-col gap-x-1 md:pr-5 lg:pr-3 xs:pr-2 xs:pt-2 text-sm text-teal-600 dark:text-emerald-500 xs:border-r border-gray-200 dark:border-white/10">
            <span className="sm:text-2xl xs:text-lg text-sm leading-5">
              {props.date.day}
            </span>
            <span>{props.date.month}</span>
            <span>{props.date.year}</span>
          </div>
          <a
            href={props.href}
            className="xs:hidden px-2 py-1 text-orange-300 rounded-md flex items-center gap-x-1 text-xs bg-orange-300/20"
          >
            مطالعه
            <svg className="size-3.5 fill-orange-300">
              <use href="#arrow" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

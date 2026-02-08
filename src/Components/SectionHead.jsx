import React from "react";

export default function SectionHead({ title, description, children }) {
  
  return (
    <div className="flex justify-between items-end sm:mb-12 mb-5 text-zinc-700 dark:text-gray-300">
      <div>
        <h3 className="font-MorrabbaMedium sm:text-4xl text-2xl">{title}</h3>

        {description && (
          <p className="font-Morrabba sm:text-lg">{description}</p>
        )}
      </div>

      {children ? (
        children
      ) : (
        <a href="#" className="flex items-center text-orange-300">
          مشاهده همه
          <svg className="size-5 fill-orange-300">
            <use href="#chevron-mini" />
          </svg>
        </a>
      )}
    </div>
  );
}

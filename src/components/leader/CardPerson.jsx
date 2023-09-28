import React from "react";

export default function CardPerson({ name, description, image, tag }) {
  return (
    <div className="shadow-up w-full rounded-lg min-h-[170px] cursor-default">
      <div className="flex flex-col items-center h-full justify-center">
        <div className="relative w-full rounded-2xl bg-white h-full flex flex-col">
          <div className="transition-all duration-700 relative py-0 px-2 rounded-md grid grid-cols-2 h-full">
            <div className="flex flex-col p-2 justify-between">
              <div className="flex flex-row items-center">
                <h4 className="flex font-mono font-bold">
                  <div className="flex text-lg items-baseline font-semi text-light-blue-dark">
                    {tag}
                  </div>
                </h4>
              </div>
              <div className="">
                <h1 className="mb-0 text-base font-semibold text-light-blue-dark">
                  {name}
                </h1>
                <p className="line-clamp-2 text-3xs text-gray-500 font-light">
                  {description}% completado
                </p>
              </div>
            </div>
            <picture className="w-full overflow-hidden flex h-full items-end">
              <img
                src={image}
                alt="{title}"
                className="bg-cover w-full h-auto"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

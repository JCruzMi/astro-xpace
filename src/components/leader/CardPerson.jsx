import React from "react";

export default function CardPerson({ name, description, image, tag, key }) {
  return (
    <div
      class="shadow-up w-full rounded-lg min-h-[170px] cursor-default"
      key={key}
    >
      <div class="flex flex-col items-center h-full justify-center">
        <div class="relative w-full rounded-2xl bg-white h-full flex flex-col">
          <div class="transition-all duration-700 relative py-0 px-2 rounded-md grid grid-cols-2 h-full">
            <div class="flex flex-col p-2 justify-between">
              <div class="flex flex-row items-center">
                <h4 class="flex font-mono font-bold">
                  <div class="flex text-lg items-baseline font-semi text-light-blue-dark">
                    {tag}
                  </div>
                </h4>
              </div>
              <div class="">
                <h1 class="mb-0 text-base font-semibold text-light-blue-dark">
                  {name}
                </h1>
                <p class="line-clamp-2 text-3xs text-gray-500 font-light">
                  {description}% completado
                </p>
              </div>
            </div>
            <picture class="w-full overflow-hidden flex h-full items-end">
              <img src={image} alt="{title}" class="bg-cover w-full h-auto" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

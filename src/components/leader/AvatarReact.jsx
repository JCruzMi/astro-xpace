import { Avatar, Typography } from "@material-tailwind/react";

export default function AvatarReact({ image, name, description, index }) {
  return index == 1 ? (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center w-full justify-center gap-4 text-light-blue-dark">
        <div className="flex flex-col relative gap-4 items-center text-center">
          <Avatar
            src={image}
            alt="avatar"
            size="xl"
            className="bg-light-blue-dark/20"
          />
          <div className="absolute top-16">
            <div className="font-bold w-auto px-2 py-[1px] text-xs bg-yellow-300 rounded-full text-light-blue-dark">
              {index}
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl">{name}</p>
            <p className="font-light text-3xs text-white bg-black rounded-full px-3 py-1">
              {description}% completado
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-between items-center py-2 px-4 bg-white rounded-xl">
      <div className="flex items-center w-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center w-full justify-between gap-4 text-light-blue-dark">
            <div className="flex gap-4">
              <Avatar
                src={image}
                alt="avatar"
                size="md"
                className="bg-light-blue-dark/20"
              />
              <div>
                <p className="font-semibold text-xl">{name}</p>
                <p className="font-light text-3xs text-gray-600 ">
                  {description}% completado
                </p>
              </div>
            </div>
            <div className="font-bold px-2 py-[1px] text-xs bg-light-blue-light/50 rounded-full text-light-blue-dark">
              {index}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
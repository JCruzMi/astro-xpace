import { Input, Button } from "@material-tailwind/react";
import { Search } from "../../icons/icons.jsx";

export function InputReact({ search, setSearch }) {
  const onChange = ({ target }) => {
    setSearch(target.value);
  };
  return (
    <>
      <div className="relative flex w-auto text-black">
        <Input
          type="text"
          label="Nombre"
          value={search}
          onChange={(event) => onChange(event)}
          className="pr-10 ring-white"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          disabled={!search}
          className={`bg-light-primary text-black !absolute cursor-pointer right-1 top-1 bottom-1 rounded w-auto h-auto transition-colors`}
        >
          <Search />
        </Button>
      </div>
    </>
  );
}

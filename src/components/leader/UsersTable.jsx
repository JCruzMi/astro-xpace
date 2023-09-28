import React, { useState, useEffect } from "react";
import { InputReact } from "./InputReact.jsx";
import { users } from "../../static/users.ts";
import CardPerson from "./CardPerson.jsx";

export default function UsersTable() {
  const sortedUsers = users.sort(
    (a, b) => parseInt(b.description) - parseInt(a.description)
  );
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(sortedUsers);

  useEffect(() => {
    if (filter == "") {
      setFilter(sortedUsers);
    }
    setFilter(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <section class="md:col-span-8 bg-cyan-400 rounded-xl py-4">
      <header class="text-light-blue-dark flex sm:flex-row flex-col gap-2 justify-between px-4 items-center">
        <h1 class="text-3xl font-bold">Compañeros</h1>
        <InputReact search={search} setSearch={setSearch} />
      </header>
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-4">
        {filter.map((user, index) => (
          <CardPerson
            name={user.name}
            description={user.description}
            image={user.image}
            tag={user.tag}
            key={index}
          />
        ))}
      </section>
    </section>
  );
}

import Characters from "@/views/characters";
import { getCharacters } from "./_actions/get";

export default async function Page({ searchParams }) {
  const { name, page, status, species, gender, type } = await searchParams;
  const queries = [
    { name: "name", value: name },
    { name: "page", value: page },
    { name: "status", value: status },
    { name: "species", value: species },
    { name: "gender", value: gender },
    { name: "type", value: type },
  ];
  const characters = await getCharacters(queries);

  return (
    <main className="w-full max-h-full overflow-y-auto flex justify-center items-center flex-wrap gap-3">
      <Characters data={characters} />
    </main>
  );
}

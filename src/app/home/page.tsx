import Counter from "@/components/Counter";
import SectionFormServerAction from "@/sections/SectionFormServerAction";
import SectionFaq from "@/sections/SectionFaq";
import httpServer from "@/services/httpServer";

async function getData() {
  const res = await httpServer("https://pokeapi.co/api/v2/pokemon");
  return res?.json();
}

export default async function Home() {
  const { results: data } = await getData();

  return (
    <div>
      <Counter />
      <hr />
      <SectionFaq items={data} />
      <hr />
      <SectionFormServerAction />
    </div>
  );
}

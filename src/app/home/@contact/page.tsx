import timeout from "@/utils/timeout";

async function getData() {
  await timeout(3000);
}

export default async function Contact() {
  await getData();
  return <h1>Contato</h1>;
}

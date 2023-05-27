import timeout from "@/utils/timeout";

async function getData() {
  await timeout(6000);
}

export default async function Dashboard() {
  await getData();
  return <h1>PageDashboard</h1>;
}

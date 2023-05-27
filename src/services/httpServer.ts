import { cookies } from "next/headers";

export default async function httpServer(url: string, revalidate = 60) {
  const nextCookies = cookies();
  const res = await fetch(url, {
    next: {
      revalidate,
    },
    headers: { token: nextCookies.get("accessToken")?.value ?? "" },
  });

  return res;
}

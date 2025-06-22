import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { city: string } }) {
  const { city } = await Promise.resolve(params);
  redirect(`/insight/${city}/weather`);
}

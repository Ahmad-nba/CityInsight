import { redirect } from "next/navigation";

export default async function Page(props: { params: Promise<{ city: string }> }) {
  const params = await props.params;
  const { city } = await Promise.resolve(params);
  redirect(`/insight/${city}/weather`);
}

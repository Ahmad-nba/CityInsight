import { redirect } from 'next/navigation';

export default function Page({ params }: { params: { city: string } }) {
  redirect(`/insight/${params.city}/weather`);
}

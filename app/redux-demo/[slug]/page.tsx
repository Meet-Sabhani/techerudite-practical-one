import CounterComponent from "@/components/reduxUse/CounterComponent";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <p>Slug: {slug}</p>
      <CounterComponent />
    </>
  );
}

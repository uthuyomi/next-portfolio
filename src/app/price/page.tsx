import Hero from "@/components/Hero";
import Table from "@/components/price/Table";
import data from "@/data/pricedata.json";
import Particle from "@/components/common/Particles";

export default function Home() {
  const price: Record<string, tableProps> = data;
  return (
    <>
    <Particle/>
    <main className="relative z-20">
      <div className="py-12 flex flex-col items-center">
        {Object.entries(price).map(([key, item], i) => (
          <Table key={key} data={item} />
        ))}
      </div>
      </main>
    </>
  );
}

import Hero from "@/components/Hero";
import Table from "@/components/price/Table";
import data from "@/data/pricedata.json";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-[#1e293b] py-12 flex flex-col items-center">
        <Table data={data.price1} />
        <Table data={data.price2} />
        <Table data={data.price3} />
        <Table data={data.price4} />
      </div>
    </main>
  );
}

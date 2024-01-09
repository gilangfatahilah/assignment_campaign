import { fetchData } from "@/data/DataCard";

const Home = async () => {
  const data = await fetchData();

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold text-center">
        Explore TV Shows
      </h2>

      <section className="">
        <div className="flex flex-col bg-[#221F1F] m-auto p-auto">
          <div className="flex overflow-x-scroll p-5  hide-scroll-bar">
            <div className="flex flex-nowrap gap-3">{data}</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

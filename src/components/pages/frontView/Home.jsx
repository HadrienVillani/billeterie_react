import FourElemsComp from "@/components/organisms/FourElemsComp";
import SearchSection from "@/components/organisms/SearchSection";
import articles from "@data/articlesData";
import events from "@data/data";
import productsData from "@/assets/data/productsData";

function Home() {
  return (
    <>
      <SearchSection />
      <FourElemsComp data={events} title="Nos prochains évènements" />
      <FourElemsComp data={articles} title="Nos meilleurs Articles" />
      <FourElemsComp data={productsData} title="Nos meilleurs Produits" />
    </>
  );
}

export default Home;

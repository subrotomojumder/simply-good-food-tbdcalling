import Banner from "@/components/ui/home/Banner";
import GoodFood from "@/components/ui/home/GoodFood";
import TrendingMenu from "@/components/ui/home/TrendingMenu";
import ShoppingCartBtn from "@/components/ui/ShoppingCartBtn";

export default function HomePage() {
  return (
    <>
      <Banner />
      <ShoppingCartBtn />
      <GoodFood />
      <TrendingMenu />
    </>
  );
}

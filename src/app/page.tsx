import { fetchBeers } from "@/actions/fetch-products";
import { LoadMore } from "@/components/load-more";
import { Beers } from "@/components/beers";
import localFont from "next/font/local";
import { Github } from "lucide-react";
import Link from "next/link";

const ClashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Semibold.woff2",
});

const Home = async () => {
  const beers = await fetchBeers(1);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen max-w-5xl">
      <div className="flex bg-rose-500 text-xl md:text-6xl font-bold justify-center items-center gap-6 mb-6">
        <div className="text-gray-200" style={ClashDisplay.style}>
          Infinite Scroll
        </div>
        <Link
          href="https://github.com/ARITRA69/infinite-scroll"
          target="_blank"
          className="bg-blue-800 p-3 rounded-full transition-all duration-300 hover:-translate-y-1"
        >
          <Github color="white" size={30} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <Beers beers={beers} />
        <LoadMore />
      </div>
    </div>
  );
};

export default Home;

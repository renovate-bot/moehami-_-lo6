import Link from "next/link";
import { Button } from "./ui/button";
export default function Postz() {
    return (
      <section className="bg-gradient-to-b from-[#0099ff] to-transparent dark:bg-gray-900 rounded-t-lg">

        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-2xl font-semibold md:text-4xl md:font-extrabold tracking-tight leading-none text-white lg:text-6xl dark:text-white">
Local Liquidation Stores

         </h1>
      <h2 className="mb-4 text-1xl font-semibold md:text-3xl md:font-extrabold tracking-tight leading-none text-white lg:text-5xl dark:text-white">What Are Liquidation Stores? </h2>
          <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
    The liquidation stores and bin-type stores offer the same exciting opportunity-in essence, retail treasure hunting at its best. These warehouse-style outlets purchase excess inventories in bulk, returned items, and closeout prices, then directly pass the savings to customers via greatly reduced prices.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
  

          </div>
          <Link href="/blog/amazon-liquidation-store">
<Button variant="outline" className="bg-golden shadow-md"> Amazon Liquidation Stores </Button>
</Link>


        </div>
          
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-2xl font-semibold md:text-4xl md:font-extrabold tracking-tight leading-none text-white lg:text-6xl dark:text-white">
            Amazon Bin Store near me
          </h1>
          <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Find your nearest Amazon Bin Store or shopping bins with ease. Simply type "Amazon Bin Store near me" into your search bar and let us guide you to the most convenient location for hassle-free returns and exchanges.
            The same steps follow for "amazon liquidation bin store".
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        
  

          </div>
          <Link href="/blog/amazon-bin-store-near-me">
<Button variant="outline" className="bg-golden shadow-md"> Find Amazon Bins Now </Button>
</Link>


        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-2xl font-semibold md:text-4xl md:font-extrabold tracking-tight leading-none text-white lg:text-6xl dark:text-white">
            The Bin Store
          </h1>
          <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Come find one-of-a-kind deals outlet bin store and treasures in your local treasure trove of a bin store! From second-hand clothing to antique furniture, from the rarest collectibles to the most unexpected treasures, anything can be found hiding in these oft-missed stores. You just never know what you will find by digging through those bins. It always is a fun adventure to take the time to relish the thrill of the hunt, finding one-of-a-kind items that add character and personality to your home or wardrobe.
          </p>
         
          <Link href="blog/find-the-best-bargain-bins-near-me">
<Button variant="outline" className="bg-golden shadow-md">Discover The Bin Store
</Button>
</Link>
        </div>




      </section>
    );
  };

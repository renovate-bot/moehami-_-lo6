
import StateClientComponent from './StateClientComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lo Bin Stores - State Information',
  description: 'Details about bin stores and liquidation centers in various states.',
};

interface PageProps {
  params: Promise<{
    state: string;
  }>;


}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params; // Await the params object

  return <StateClientComponent state={state} />;
}

export async function generateStaticParams() {
  const states = [
    "alabama",
    "alaska",
    "arizona",
    "arkansas",
    "california",
    "colorado",
    "connecticut",
    "delaware",
    "florida",
    "georgia",
    "hawaii",
    "idaho",
    "illinois",
    "indiana",
    "iowa",
    "kansas",
    "kentucky",
    "louisiana",
    "maine",
    "maryland",
    "massachusetts",
    "michigan",
    "minnesota",
    "mississippi",
    "missouri",
    "montana",
    "nebraska",
    "nevada",
    "new-hampshire",
    "new-jersey",
    "new-mexico",
    "new-york",
    "north-carolina",
    "north-dakota",
    "ohio",
    "oklahoma",
    "oregon",
    "pennsylvania",
    "rhode-island",
    "south-carolina",
    "south-dakota",
    "tennessee",
    "texas",
    "utah",
    "vermont",
    "virginia",
    "washington",
    "west-virginia",
    "wisconsin",
    "wyoming",
  ];

  return states.map((state) => ({
    state,
  }));
}

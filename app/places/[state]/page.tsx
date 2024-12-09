import { useParams } from 'next/navigation';
import StateClientComponent from './StateClientComponent';
import type { Metadata } from 'next';

export default async function StatePage({ params }: { params: { state: string } }) {
  const { state } = await params;

  return <StateClientComponent state={state} />;
}
export const metadata: Metadata = {
  title: `Bin Stores `,
  description: 'Discover and explore local stores in your area',
};

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
    "wyoming"
  ];

  return states.map((state) => ({
    state,
  }));
}

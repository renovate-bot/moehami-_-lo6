import { Metadata } from 'next';
import { getStateSEO } from '@/lib/tina';

import StateClientComponent from './StateClientComponent';

interface PageProps {
  params: Promise<{
    state: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params;
  const stateFormatted = state
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const seoData = await getStateSEO(state);

  return {
    title: seoData?.metaTitle || `${stateFormatted} Information & Guide`,
    description: seoData?.metaDescription || `Explore key facts, history, and attractions of ${stateFormatted}. Learn more about what makes ${stateFormatted} unique.`
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params;
  return <StateClientComponent state={state} />;
}

export async function generateStaticParams() {
  const states = [
    "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new-hampshire", "new-jersey", "new-mexico", "new-york", "north-carolina", "north-dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode-island", "south-carolina", "south-dakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "west-virginia", "wisconsin", "wyoming"
  ];

  return states.map((state) => ({ state }));
}

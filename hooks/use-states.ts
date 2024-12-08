import { useState, useEffect } from 'react';
import { StateData } from '@/types/states';

export function useStates() {
  const [states, setStates] = useState<StateData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStates() {
      try {
        // In a real implementation, this would load from your JSON files
        // For now, we'll use placeholder data
        const statesData: StateData[] = [
          {
            name: "Florida",
            abbreviation: "FL",
            stores: []
          },
          {
            name: "Texas",
            abbreviation: "TX",
            stores: []
          },
          // Add more states...
        ];
        
        setStates(statesData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load states data');
        setLoading(false);
      }
    }

    loadStates();
  }, []);

  return { states, loading, error };
}
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SingleCountry() {
  const { id } = useParams();
  
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch country data');
        }
        const data = await response.json();
        setCountry(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!country) return <div>No country data found</div>;

  return (
    <div className="flex p-4">
      <div className="w-1/3 pr-4">
        <h1 className="text-2xl font-bold mb-4">{country.name.common}</h1>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      </div>
      <div className="w-2/3">
        {/* You can add more detailed information here */}
        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="w-full max-w-md" />
      </div>
    </div>
  );
}
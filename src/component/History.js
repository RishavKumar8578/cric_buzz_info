import React, { useEffect, useState } from 'react';
import ApiService from '../service/ApiService'
import MatchCard from './MatchCard';

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.getAllMatches();
        setHistory(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-4xl font-bold mb-6'>Match History....</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {history.map(match => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
    </div>
  );
}

export default History;

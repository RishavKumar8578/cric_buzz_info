// import React, { useEffect, useState } from 'react';
// import ApiService from './ApiService';
// import MatchCard from '../component/Home';
// import LiveMatchCard from '../component/Live';
// import PointTable from '../component/Point_Table';

// function ExampleComponent() {
//   const [matches, setMatches] = useState([]);
//   const [liveMatches, setLiveMatches] = useState([]);
//   const [pointTable, setPointTable] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allMatches = await ApiService.getAllMatches();
//         console.log('All Matches:', allMatches);
//         setMatches(allMatches);

//         const liveMatchesData = await ApiService.getLiveMatches();
//         console.log('Live Matches:', liveMatchesData);
//         setLiveMatches(liveMatchesData);

//         const pointTableData = await ApiService.getPointTable();
//         console.log('Point Table:', pointTableData);
//         setPointTable(pointTableData);
//       } catch (error) {
//         setError('Failed to fetch data. Please try again later.');
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-extrabold mb-4 position:left">Live Cricket Score</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {matches.map((match, index) => (
//           <MatchCard key={index} title={match.title} date={match.date} teams={match.teams} />
//         ))}
//       </div>

//       <h2 className="text-2xl font-bold mt-8 mb-4">Live Matches</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {liveMatches.map((liveMatch, index) => (
//           <LiveMatchCard key={index} title={liveMatch.title} status={liveMatch.status} score={liveMatch.score} />
//         ))}
//       </div>

//       <h2 className="text-2xl font-bold mt-8 mb-4">Point Table</h2>
//       <PointTable pointTable={pointTable} />
//     </div>
//   );
// }

// export default ExampleComponent;

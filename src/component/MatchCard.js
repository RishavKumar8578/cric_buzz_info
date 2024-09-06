import React from 'react';

import { useNavigate } from 'react-router-dom';

// Card component for matches
function MatchCard({ match }) {

  const navigate = useNavigate();

  const handleTableClick = () => {
    navigate('/point-table', { state: { matchId: match.id } });
  };
    
  return (
    <div className="
    hover:bg-blue-200
    transition-all
    h-full
    bg-gray-100 border-b-orange-500 border-b-8 shadow-lg rounded-xl cursor-pointer hover:border-b-green-800 p-4 hover:shadow-slate-500">
      <div className='header border-b-2 pb-3 border-b-gray-400'>
      <h2 className="text-xl font-bold mb-2">{match.teamHeading}</h2>
      <p>{match.matchNumberVenue}</p>
      <p>Date: {match.date}</p>
      </div>
      <div className='body mt-3'>
      
         <div className='flex justify-between px-2'>
          
             
            
            <p className='font-bold'>{match.battingTeam} </p>
            <p className='font-bold'>{match.battingTeamScore}</p>
         </div>
         <div className='flex justify-between px-2'>
            <p className='font-bold'>{match.bowlTeam} </p>
            <p className='font-bold'>{match.bowlTeamScore}</p>
         </div>
      
      {/* <p>Teams: {Array.isArray(match.teams) ? match.teams.join(' vs ') : 'Teams not available'}</p> */}
      </div>
      <div className='footer mt-3'>
      
      <p className='text-red-700'>{match.liveText}</p>
      <p className='text-green-700'>Status: {match.textComplete}</p>
      <div className='flex justify-between px-2'>
        <p></p>
        <p>
      <button 
          className="mt-2 p-2 text-black rounded-lg hover:bg-blue-700 text-right font-bold"
          onClick={handleTableClick}>
           Table
        </button>
        </p>
        </div>
      </div>
      
    </div>
  );
}

export default MatchCard;

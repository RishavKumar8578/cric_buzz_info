import axios from 'axios';

const ApiService = {
  getAllMatches: async () => {
    try {
      const response = await axios.get('http://localhost:8081/match');
      return response.data;
    } catch (error) {
      console.error('Error fetching all matches:', error);
      throw error;
    }
  },

  getLiveMatches: async () => {
    try {
      const response = await axios.get('http://localhost:8081/match/live');
      return response.data;
    } catch (error) {
      console.error('Error fetching live matches:', error);
      throw error;
    }
  },

  // getMatchHistory: async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8081/match/history');
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error fetching match history:', error);
  //     throw error;
  //   }
  // },

  getPointTable: async () => {
    try {
      const response = await axios.get('http://localhost:8081/match/point-table');
      
      return response.data;
    } catch (error) {
      console.error('Error fetching point table:', error);
      throw error;
    }
  },
};

export default ApiService;

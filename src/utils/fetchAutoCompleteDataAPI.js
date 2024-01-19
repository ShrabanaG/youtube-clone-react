import axios from 'axios';

export const fetchAutoCompleteDataAPI = async (query) => {
  try {
    const response = await axios.get('https://youtube-v31.p.rapidapi.com/search', {
      params: {
        q: query,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
      },
      headers: {
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY, // Replace with your RapidAPI key
        useQueryString: true,
      },
    });
    return response.data.items.map((item) => item.snippet.title);
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return [];
  }
};

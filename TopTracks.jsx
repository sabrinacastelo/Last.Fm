import React, { useEffect, useState } from 'react';
import axios from 'axios';


const TopTracks = () => {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=361c60dc193ce85ba3f6f42211af6434&format=json'
        );
        setTopTracks(response.data.tracks.track.slice(0, 10));
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Top 10 Músicas Mais Ouvidas</h2>
      <ul>
        {topTracks.map((track) => (
          <li key={track.name}>{track.name} by {track.artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopTracks;

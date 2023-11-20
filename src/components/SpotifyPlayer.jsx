// SpotifyPlayer.js

import React, { useEffect, useState } from 'react';

const SpotifyPlayer = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Function to extract access token from URL
    const getAccessToken = () => {
      const params = new URLSearchParams(window.location.hash.substring(1));
      return params.get("access_token");
    };

    const fetchPlaylists = async () => {
      const token = getAccessToken();
      setAccessToken(token);

      // Fetch user's playlists
      const response = await fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      const data = await response.json();
      setPlaylists(data.items);
    };

    fetchPlaylists();
  }, []);

  useEffect(() => {
    if (accessToken) {
      // Initialize Spotify Player SDK
      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new Spotify.Player({
          name: "Your Player Name",
          getOAuthToken: (cb) => { cb(accessToken); }
        });

        player.connect();
      };
    }
  }, [accessToken]);

  return (
    <div>
      <h1>Spotify Playlists</h1>
      {playlists.map(playlist => (
        <p key={playlist.id}>{playlist.name}</p>
      ))}
    </div>
  );
};

export default SpotifyPlayer;

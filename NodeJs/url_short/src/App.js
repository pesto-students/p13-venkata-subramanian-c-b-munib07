// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleShorten = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
      setShortUrls([...shortUrls, response.data.result]);
      setLongUrl('');
      setLoading(false);
    } catch (error) {
      setError('Failed to shorten URL');
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <input 
        type="text" 
        placeholder="Enter URL" 
        value={longUrl} 
        onChange={(e) => setLongUrl(e.target.value)} 
      />
      <button onClick={handleShorten} disabled={loading}>{loading ? 'Shortening...' : 'Shorten'}</button>
      {error && <p>{error}</p>}
      <h2>Shortened URLs:</h2>
      <ul>
        {shortUrls.map((url, index) => (
          <li key={index}><a href={url.full_short_link}>{url.full_short_link}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default App;


  const fetchAllPodcasts = async (setPodcasts, setError) => {
      try {
          const response = await fetch('https://podcast-api.netlify.app');
          if(!response.ok){
              throw new Error('Failed to fetch podcasts');
          }
          const data = await response.json();
          setPodcasts(data);
      } catch (error) {
          setError(error.message);
          
      }
  };

  export default fetchAllPodcasts;


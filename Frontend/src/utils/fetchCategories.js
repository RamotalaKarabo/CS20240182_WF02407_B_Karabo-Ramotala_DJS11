let id = '';

let podcastsData = [];

function fetchCategories(ID, setGenre, setError){

  const fetchCategory = async () => {

    try {
        const response = await fetch(`https://podcast-api.netlify.app/genre/${ID}`);
        
        if(!response.ok){
            throw new Error('Failed to fetch podcasts');
        }
        const data = await response.json();
        setGenre(data)
        podcastsData.push(data);
        id = ID;

    } catch (error) {
        setError(error.message);
        
    }
};

fetchCategory(ID)
}

export default fetchCategories;




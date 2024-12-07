
export  function filterPodcasts(podcasts, searchTerm, genre,sortOrder, setFilteredPodcasts){

  let filtered = podcasts;

  if (searchTerm) { 
    filtered = filtered.filter(podcast => 
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
     ); 
    } if (genre !== 'all') { 
      filtered = filtered.filter(podcast => 
        podcast.genre === genre); 
        
      } if (sortOrder === 'asc') { 
        filtered.sort((a, b) => a.title.localeCompare(b.title));
       } else { filtered.sort((a, b) => 
        b.title.localeCompare(a.title)); 
      } 

      setFilteredPodcasts(filtered); 

}

let podcastData = ""
let filteredData = []

export function filterPodByCategory(id){

  const fetchAllPodcasts = async () => {

    try {
        const response = await fetch('https://podcast-api.netlify.app/');
        if(!response.ok){
            throw new Error('Failed to fetch podcasts');
        }
        const data = await response.json();
        podcastData = data;
    } catch (error) {
        console.log(error.message);
        
    }
};

fetchAllPodcasts();

console.log(podcastData);

for(let x of podcastData){
  let found = false;
  
 x.genres.forEach(element => {
  if(element == id){
    found = true;
  }else{
    found = false;
  }

  });

  if(found == true){
    
    filteredData.push(x)
  }
}

return filteredData;

}

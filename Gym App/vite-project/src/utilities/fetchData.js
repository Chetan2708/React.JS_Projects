export const Options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6a1598a399msh2ea3cfd495b72p13d2b3jsn582b48041c21",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  
  method: "GET",
  headers: {
    
    "content-type": "application/octet-stream",
    
    "X-RapidAPI-Key": "5270580346msha77351a16e73b98p168065jsn3002347ce1eb",
  
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// code by: Mamun Abdullah (@theTradeCoder)
$(document).ready(()=>{

    $('#googleSearch').submit((e)=>{
      e.preventDefault();
      let searchTopic = $('.google-search').val();
      searchTopic = searchTopic.split(' ').join('+');
      let searchUrl = `https://www.google.com/search?q=${searchTopic}&oq=${searchTopic}&ie=UTF-8`;
     window.open(searchUrl);
    });
  
});

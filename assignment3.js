(async function(){
    const response = await fetch("./data.json");
    const data = await response.json();

    const genre = document.getElementById("genreId");
    const year = document.getElementById("yearId");
    const languages = document.getElementById("languagesId");
    // const ratings = document.getElementById("ratingsId");



    const btn = document.getElementById("searchBtn")

    
    function search(){
        const genreValue = genre.value;
        const yearValue = year.value;
        const languagesValue = languages.value;

        
        // const ratingsValue = ratings.value;

        const result = data.filter(function(userValue) {  
            if (typeof userValue.genres === 'string') {    
              if (userValue.genres.toLowerCase().includes(genreValue.toLowerCase()) && userValue.release_date.includes(yearValue)
              && userValue.original_language.toLowerCase().includes(languagesValue.toLowerCase())){
                return true;
              }
            }
            return false;
          });

        // const test = data.filter(function (userValue){
        //     if (typeof userValue.release_date.toLowerCase().includes(yearValue.toLowerCase()) === 'string') { 
        //         return true;

        //     }
        //     else{
        //         return false;
        //     }

        // });

    //    console.log(test);
        console.log(typeof yearValue,typeof genreValue, typeof languagesValue)
        
        
    }

    btn.addEventListener("click",search);

})()
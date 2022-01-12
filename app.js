            var u1='https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=9bd3e7f6976948acbc7749f9e174b37b';
            getnews(u1);
            const main=document.getElementById('main');
        
            function getnews(u1){
              fetch(u1).then(res => res.json()).then(data => {
                console.log(data.articles);
                shownews(data);
                  
                })
          }
            
           
        function shownews(data) {
        main.innerHTML="";

        data.forEach(news => {
        const {title,url,urlToImage}=news;
        const news1 = document.createElement('div');
        news1.classList.add('news');
        news1.innerHTML = `
       
        
            <div class="card">
  <img src="${urlToImage}" class="card-img-top" alt="Nope"/>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <a href="${url}" class="btn btn-primary">Read More</a>
  </div>
</div>
        `
        main.appendChild(news1);
    })
}

let stockTicker = document.querySelector('.userInput').value
const sumbitBtn = document.querySelector('#submitBtn')
const mainContainer = document.getElementById('mainContainer')
const headingSection = document.getElementById('headline')
const articleContainer = document.getElementById('articleContainer')

const fetchStockNews = async () => {
    let stockTicker = document.querySelector('.userInput').value
    const symbol = stockTicker.toUpperCase();
    stockTicker = ""; 
    console.log(`/stock-news?symbol=${encodeURIComponent(symbol)}`)
  
    if (symbol) {
      try {
        const response = await fetch(`/stock-news?symbol=${encodeURIComponent(symbol)}`);
        
        if (!response.ok) {
          throw new Error(`Error fetching news: ${response.status}`);
        }
  
        const newsData = await response.json();
        console.log(newsData)
        
        headingSection.innerHTML = ''
        articleContainer.innerHTML = ''

        const headlinesHeading = headingSection.appendChild(document.createElement("h2"))
        headlinesHeading.style.paddingTop = '0.75em'
        headlinesHeading.style.fontSize = '1.25em'
        headlinesHeading.style.fontWeight = '500'
        headlinesHeading.innerText = `Latest Headlines for $${symbol}`

        let count = 0;

        for (let i = 0; i < newsData.feed.length; i++) {
          const response = newsData.feed[i];
      
          if (response.banner_image) {
            const article = document.createElement("article");
            article.id = "article";

            const anchorDiv = document.createElement('div')
            const anchor = document.createElement("a");
            anchorDiv.id = "anchor";
            anchor.target = "_blank";
            anchor.href = response.url;
            anchorDiv.appendChild(anchor)

            const title = document.createElement("p");
            title.classList.add("title");
            title.textContent = response.title;
            anchor.appendChild(title);
      
            const img = document.createElement("img");
            img.src = response.banner_image;
            img.alt = "Article image";
            
      
            const author = document.createElement("p");
            author.classList.add("author");
            author.textContent = response.authors[0];
            
            const summaryDiv = document.createElement('div')
            const summary = document.createElement("p");
            summaryDiv.classList.add("summary");
            summary.textContent = response.summary;
            summaryDiv.appendChild(summary)
      
            const contentInfo = document.createElement("div");
            contentInfo.classList.add("contentInfo");
            const label = document.createElement("h2");
            label.classList.add("label");
            label.textContent = response.overall_sentiment_label;
      
            const source = document.createElement("h2");
            source.classList.add("source");
            source.textContent = response.source;
      
            contentInfo.appendChild(label);
            contentInfo.appendChild(source);
      
            article.appendChild(anchorDiv);
            article.appendChild(img);
            article.appendChild(author);
            article.appendChild(summaryDiv);
            article.appendChild(contentInfo);
      
            articleContainer.appendChild(article);
            count++;
          }
      
          if (count === 9) return;
        }
    
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

sumbitBtn.addEventListener('click', fetchStockNews)
const inputField = document.querySelector(".userInput");

inputField.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    fetchStockNews()
  }
});



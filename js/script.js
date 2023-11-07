fetch('https://api.quotable.io/random').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    let Quotes = document.getElementById('Quotes'),
        Title = document.getElementById('title'),
        random = document.getElementById('Regroup'),
        tag1 = document.getElementById('tag1'),
        tag2 = document.getElementById('tag2');
    Quotes.innerText = "“"+data.content+"”"; 
    Title.innerText = data.author;
    if(data.tags.length < 2){
        tag1.innerText = data.tags[0]
        tag2.style.display = "none";
    }else{
        tag2.style.display = "inline-block" ;
            tag1.innerText = data.tags[0];
            tag2.innerText = data.tags[1]; 
    }

    random.addEventListener("click",()=>{
        location.reload();      
    })

}).catch(error => {
    console.log(error);
  });
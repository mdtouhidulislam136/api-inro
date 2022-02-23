function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => loadData2(data));

}


function loadData2(data){
   const ul = document.getElementById('posts');
    for (const info of data){
    const li = document.createElement('li');
    li.innerText = info.body;
    ul.appendChild(li);

    }
}
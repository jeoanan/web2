/* console.log("Hello Word");

console.log(myOtherVariable);

if (myOtherVariable < 5){
    let test=5;
    console.log(myOtherVariable);
}


let myOtherVariable = 4;
let word = "hola";

let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure corporis laudantium dolorem sapiente illum eveniet ${myOtherVariable} omnis dolor quibusdam distinctio ducimus ${word} incidunt eos, laboriosam, doloribus quam pariatur alias dolorum. Pariatur!`;

console.log(text);

/* //Obtener el valor mayor de 3 numeros

let number1 = prompt("Ingrese el primer numero");
let number2 = prompt("Ingrese el primer numero");
let number3 = prompt("Ingrese el primer numero");

if (number1 > number2 && number1 > number3){
    console.log(`El numero mayor es el ${number1}`);
}
else if (number2 > number3){
    console.log(`El numero mayor es el ${number2}`);

}
else if(number1 == number2 && number1 == number3){
    console.log("los numeros son iguales");
}
else {
    console.log(`El numero mayor es el ${number3}`);
} */

/* for (let i=0;i<10;i++){
    console.log(i);
}
let count = 0;
while (count < 5){
    console.log(count);
    count++;
}

switch(variable){ //selector
    case 1:
        break;
    case 2:
        break;
} 

let myArray = ['Pedro', 'Laura', 'Sandra'];
myArray.push('José');
console.log(myArray);
for(let i=0; i<myArray.length;i++){
    console.log(myArray[i]);
}
for(let i=0; i<myArray.length;i++){
    let template = `<div class="alert alert-primary role="alert">${myArray[i]}</div>`;
    document.write(template);
    /* document.write(`<h1> Hola, ${myArray[i]}</h1>`); 
}

let myObject={
    comiendo: 'Acción y efecto de comer',
    age: 25,
    money: 25.6,
    properties:['casa','carro','bicicleta'],
    data: {
        test:25
    }
}

let userData = {
    name:'Pedro',
    age:25,
    identification: 36456978,
    lastname:'gonzalez'
}

console.log(myObject.properties[0]);

let arrayJson = [
    {
        name:'Pedro',
        age:25,
        identification: 36456978,
        lastname:'gonzalez'
    },
    {
        name:'Laura',
        age:26,
        identification: 36456978,
        lastname:'gonzalez'
    },
    {
        name:'Sandra',
        age:27,
        identification: 36456978,
        lastname:'gonzalez'
    },
    {
        name:'Jacinto',
        age:28,
        identification: 36456978,
        lastname:'gonzalez'
    }
];

/*for(let i=0; i<myArray.length;i++){
    let template = `<div class="alert alert-primary role="alert">${arrayJson[i].name} - ${arrayJson[i].age}</div>`;
    document.write(template);
     document.write(`<h1> Hola, ${myArray[i]}</h1>`); 
}*/

// modo2 de recorrer un objeto
/*for(let i of arrayJson){
    let template = `<div class="alert alert-primary role="alert">${i.name} - ${i.age}</div>`;
    document.write(template);
    document.write(`<h1> Hola, ${myArray[i]}</h1>`);
}

//modo3 de recorrer un objeto
arrayJson.forEach(function(e){
    console.log(e);
});

// contenido en un lugar especifico
function showAlert(name){
    alert(`Hola, ${name}`);
}

let cards = document.getElementById("cards");

for(let i of arrayJson){
    let template = `<div class="col-12 col-sm-12 col-md-6 lg-4 mt-2 mb-2" onclick="showAlert('${i.name}')">
    <div class="card">
        <div class="card-body">
        ${i.name} - ${i.age}
        </div>
    </div>
</div>`;
    cards.innerHTML += template;
} */

let cards = document.getElementById("cards");
let apiEndpoint = "http://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=c41b77cc65734da68ea834a1b98096ad";

const getNews = async() =>{
    let cards = document.getElementById("cards");
    let response = await fetch(apiEndpoint);
    let news = await response.json();
    cards.innerHTML ="";
    news.articles.forEach(function(element) {
        let template = `
        <div class="col-6 mt-2">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${element.urlToImage} alt="...">
                <div class="card-body">
                    <h5 class = "card-title">${element.title}</h5> 
                    <p class="card-text">${element.description}</p>
                </div>
            </div>
        </div>`;
    cards.innerHTML += template;
    });
    console.log(news);
}

const fetchData = async () => {
    let country = document.getElementById("country").value;
    let category = document.getElementById("category").value;
    apiEndpoint = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=c41b77cc65734da68ea834a1b98096ad`;

    await getNews();
}

getNews(); 

/*
const fetchData = async () => {
    let response = await fetch("http://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=f666b1a15c8940dc9df48ce0596933fa");
    let dataJson = await response.json();
    return dataJson.articles;
}
const renderData = async () => {
    const articles = await fetchData();
    let container = document.getElementById("articles");
    let urlImageNotFound = "https://programacion.net/files/article/20160819020822_image-not-found.png";
    // conticion ? instrucción : intrcción
    articles.forEach((article) => {
        let alertTemplate = `<div class="col-12 col-sm-12 col-md-6 col-lg-4">
        <div class="card" style="width: 18rem;">
            <img src="${article.urlToImage == null ? urlImageNotFound : article.urlToImage}"class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description == null ? "Descripción no disponible" : article.description}</p>
            </div>
          </div>
        </div>`;
        container.innerHTML += alertTemplate;
    });
}
const getNews = () => {
    alert("Hola");
}
renderData();*/
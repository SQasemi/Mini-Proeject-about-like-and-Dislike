
//thumb up and down with use of promise
let listItems = document.querySelectorAll('li');
let indexCounnterOfLi = 0;
//when the accept button is clicked
let acceptBtn = document.querySelector('.accept');
acceptBtn.addEventListener('click', () =>{
    animateLiOut(indexCounnterOfLi, 'right')
    .then (() =>{
       animateNextLi(indexCounnterOfLi); 
    })
    indexCounnterOfLi++;
});

//when the reject button is clicked
let rejectBtn = document.querySelector('.reject');
rejectBtn.addEventListener('click', () =>{
    animateLiOut(indexCounnterOfLi, 'left')
    .then (() =>{
       animateNextLi(indexCounnterOfLi); 
    })
    indexCounnterOfLi++;
});
//function to define the direction 
function animateLiOut(index, changeDirection){
    if(changeDirection === 'left'){
        listItems[index].style.transform = 'translateX(-1000px)';
    }
    else{
        listItems[index].style.transform = 'translateX(1000px)'; 
    }
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve();
        },700);
    });
}

function animateNextLi (index) {
    listItems[index].style.transform = 'scale(1)';
        listItems[index].style.opacity = 1;
}


//Personalise the application
//array of objects
let famousFootballPlayers = [
    {
       
       name: 'Cristiano Ronaldo',
       age: 34,
       country:'Portuguese',
       photo:'famousFootballPlayers/Ronaldo.jpg'
    },
    {
        name: 'Lionel Messi',
        age: 31,
        country:'Argentina',
        photo:'famousFootballPlayers/Lionel-Messi.jpg'
     },
     {
        name: 'James Rodriguez',
        age: 28,
        country:'Colombia',
        photo:'famousFootballPlayers/-colombia-james-rodriguez.jpg'
     },
     {
        name: 'luka Modric',
        age: 28,
        country:'Croatia',
        photo:'./famousFootballPlayers/-croatia-luka-modric.jpg'
        
     },
     {
        name: 'Giorgio Chiellini',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/-italy--giorgio-chiellini--.jpg'
        
     },
     {
        name: 'David De-Gea-',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/-spain-david-de-gea-.jpg'
        
     },
     {
        name: 'Eden Hazard',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/belgium-eden-hazard--.jpg'
        
     },
     {
        name: 'Romelu lukaku',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/belgium-romelu-lukaku-.jpg'
        
     },
     {
        name: 'Dani Alves',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/brazil-dani-alves-.jpg'
        
     },
     {
        name: 'Christian Eriksen',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/denmark-christian-eriksen.png'
        
     },
     {
        name: 'Marcelo',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/brazil-marcelo--.jpg'
        
     },
     {
        name: 'Mohamed Salah',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/egypt-mohamed-salah.jpg'
        
     },
     {
        name: 'Neymar Jr',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/brazilneymar-jr--national-.jpg'
        
     },
     {
        name: 'Kylian Mbappe-',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/france-kylian-mbappe-.jpg'
        
     },
     {
        name: 'Harry Kane',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/england-harry-kane.jpg'
        
     },
     {
        name: 'Manuel Neuer',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/germany-manuel-neuer-.jpg'
        
     },
     {
        name: 'Paul Pogba',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/france-paul-pogba-.jpg'
        
     },
     {
        name: 'Virgil Van Dijk',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/netherland-virgil-van-dijk-.jpg'
        
     },
     {
        name: 'Gianluigi Buffon',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/italy-gianluigi-buffon-.jpg'
        
     },
     {
        name: 'Sadio Mane',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/senegal-sadio-mane.jpg'
        
     },
     {
        name: 'Sergio Ramos',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/Spain-sergio-ramos.jpg'
        
     },
     {
        name: 'Gareth Bale-',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/wales-gareth-bale-.jpg'
        
     },{
        name: 'Giorgio Chiellini',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/-italy--giorgio-chiellini--.jpg'
        
     },
     {
        name: 'Giorgio Chiellini',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/-italy--giorgio-chiellini--.jpg'
        
     },
     {
        name: 'Giorgio Chiellini',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/-italy--giorgio-chiellini--.jpg'
        
     },
     {
        name: 'Giorgio Chiellini',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/-italy--giorgio-chiellini--.jpg'
        
     },
     {
        name: 'Giorgio Chiellini',
        age: 30,
        country:'Italy',
        photo:'./famousFootballPlayers/-italy--giorgio-chiellini--.jpg'
        
     },
     
] 

//to create a list of Items
 for(let items = 0; items <= famousFootballPlayers.length; items++){
 // console.log(listItems);
  listItems[items].innerHTML = "";
  let addPhoto = document.createElement('img');
  listItems[items].appendChild(addPhoto);
  addPhoto.src = famousFootballPlayers[items].photo;

  let addtitle = document.createElement('h6');
  listItems[items].appendChild(addtitle);
  addtitle.style.color = "white";
  addtitle.style.fontSize = "30px";
  addtitle.style.fontWeight = "bold";

  addtitle.innerHTML = famousFootballPlayers[items].name;
  
 

 
  
}
// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "none";
  } else {
    patty.style.display = "inherit";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  
  if (state.Cheese) {
    cheese.style.display = "none";
  } else {
    cheese.style.display = "inherit";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");
  
  if (state.Tomatoes) {
    tomato.style.display = "none";
  } else {
    tomato.style.display = "inherit";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  
  if (state.Onions) {
    onion.style.display = "none";
  } else {
    onion.style.display = "inherit";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  
  if (state.Lettuce) {
    lettuce.style.display = "none";
  } else {
    lettuce.style.display = "inherit";
  }
}


// Setup EventListeners, so that we can add or remove different ingredients by 
//clicking on the respective ingredient buttons. That's the whole point of it.

document.querySelector(".btn-patty").onclick = function () {
  // console.log(state.Patty);
  if(state.Patty===true)
    document.querySelector(".btn-patty").classList.add("active");
  else
    document.querySelector(".btn-patty").classList.remove("active"); 
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  //console.log(state.Cheese);
  if(state.Cheese===true)
    document.querySelector(".btn-cheese").classList.add("active");
  else
    document.querySelector(".btn-cheese").classList.remove("active"); 
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  //console.log(state.Tomatoes);
  if(state.Tomatoes===true)
    document.querySelector(".btn-tomatoes").classList.add("active");
  else
    document.querySelector(".btn-tomatoes").classList.remove("active");
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
 // console.log(state.Onions);
  if(state.Onions===true)
    document.querySelector(".btn-onions").classList.add("active");
  else
    document.querySelector(".btn-onions").classList.remove("active");
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
 // console.log(state.Lettuce);
  if(state.Lettuce===true)
    document.querySelector(".btn-lettuce").classList.add("active");
  else
    document.querySelector(".btn-lettuce").classList.remove("active");
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  var IngrList = document.querySelectorAll(".items");
  //console.log(IngrList);
  if(state.Patty)
   IngrList[0].innerHTML="";
  else
   IngrList[0].innerHTML="Patty";
  if(state.Cheese)
   IngrList[1].innerHTML="";
  else
   IngrList[1].innerHTML="Cheese";  
  if(state.Tomatoes)
   IngrList[2].innerHTML="";
  else
   IngrList[2].innerHTML="Tomatoes";
  if(state.Onions)
   IngrList[3].innerHTML="";
  else
   IngrList[3].innerHTML="Onions";
  if(state.Lettuce)
   IngrList[4].innerHTML="";
  else
   IngrList[4].innerHTML="Lettuce";    
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice(){
  let price = wholeWheatBun;
  let IngrdNames = document.querySelectorAll(".items");
  let emptyArr=[];
  for(let i=0;i<IngrdNames.length;i++){
    if(IngrdNames[i].innerHTML!=="")
    {
      emptyArr.push(IngrdNames[i].innerHTML);
    }
  }
  for(let i=0;i<emptyArr.length;i++)
  {
    for(const j in ingredients)
    {
      if(j ===emptyArr[i])
        price=price+ingredients[j];
    }
  }
  var inr="INR ";
  var amount = inr.concat(price); 
 // console.log(amount);
  var x = document.querySelector(".price-details");
  x.innerHTML = amount;
}

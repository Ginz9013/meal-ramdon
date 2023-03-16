// 早午晚餐
const meal = document.querySelector("#meal");

// 勾選的類別
const isBrunch = document.querySelector("#brunch").checked;
const isRice = document.querySelector("#rice").checked;
const isNoodle = document.querySelector("#noodle").checked;
const isBuffet = document.querySelector("#buffet").checked;
const isOthers = document.querySelector("#others").checked;

//Button
const rollBtn = document.querySelector("#roll");

// 顯示結果
const order = document.querySelector("#order");


let mealList = [];

fetch('mealList.json')
  .then(response => response.json())
  .then(data => {
    mealList = [...data];
  })
  .catch(error => {
    console.error(error); // 處理錯誤
});


// Meal Raondom
function ramdonMeal() {
  const random = Math.floor(Math.random() * mealList.length); 
  const orderMeal = mealList[random].name;
  console.log(orderMeal);

  //Render
  order.innerText = orderMeal;
}


// Event Litsener
rollBtn.addEventListener("click", () => ramdonMeal());
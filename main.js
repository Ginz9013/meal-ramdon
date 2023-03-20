// 早午晚餐
const meal = document.querySelector("#meal");

// 勾選的類別
const brunch = document.querySelector("#brunch");
const rice = document.querySelector("#rice");
const noodle = document.querySelector("#noodle");
const buffet = document.querySelector("#buffet");
const others = document.querySelector("#others");

//Button
const rollBtn = document.querySelector("#roll");

// 顯示結果
const order = document.querySelector("#order");

// SourceData
let SourceData = [];

// filterList
let mealList = [];

fetch('mealList.json')
  .then(response => response.json())
  .then(data => {
    SourceData = [...data];
  })
  .catch(error => {
    console.error(error); // 處理錯誤
});


// Filter
function filter() {
  mealList = [...SourceData];

  mealList = mealList.filter(item => item.meal.includes(meal.value))

  console.log(mealList);

  if (!brunch.checked) {
    mealList = mealList.filter(item => !(item.type.includes("brunch")))
  }

  if (!rice.checked) {
    mealList = mealList.filter(item => !(item.type.includes("rice")))
  }

  if (!noodle.checked) {
    mealList = mealList.filter(item => !(item.type.includes("noodle")))
  }

  if (!buffet.checked) {
    mealList = mealList.filter(item => !(item.type.includes("buffet")))
  }

  if (!others.checked) {
    mealList = mealList.filter(item => !(item.type.includes("others")))
  }
}


// Meal Raondom
function ramdonMeal() {
  const random = Math.floor(Math.random() * mealList.length); 
  const orderMeal = mealList[random].name;
  console.log(orderMeal);

  //Render
  order.innerText = orderMeal;
}


// Event Litsener

// Roll
rollBtn.addEventListener("click", () => {

  filter();
  ramdonMeal();
});
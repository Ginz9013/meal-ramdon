// 早午晚餐
const meal = document.querySelector("#meal");

// 勾選的類別
const brunch = document.querySelector("#brunch");
const rice = document.querySelector("#rice");
const noodle = document.querySelector("#noodle");
const buffet = document.querySelector("#buffet");
const others = document.querySelector("#others");

const checkList = [brunch, rice, noodle, buffet, others];

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

//Check default
function checkDefault() {
  for(let i = 0 ; i < checkList.length ; i++) {
    if(checkList[i].checked) {
      return false;
    }
  }

  return true;
}


// Filter
function filter() {
  mealList = [...SourceData];

  // mealList = mealList.filter(item => item.meal.includes(meal.value))

  // checkDefault
  if(checkDefault() === true) {
    console.log(mealList);
    return;
  }

  //filter
  // mealList.forEach(i => {
  //   if (!i.checked) {
  //     mealList = mealList.filter(item => !(item.type.includes(i)))
  //   }
  // })
  


  if (!brunch.checked) {
    mealList = mealList.filter(item => !(item.type.includes("brunch")))
  }

  if (!rice.checked) {
    mealList = mealList.filter(item => !(item.type.includes("rice")))
    console.log(mealList);
  }

  if (!noodle.checked) {
    mealList = mealList.filter(item => !(item.type.includes("noodle")))
  }

  if (!buffet.checked) {
    mealList = mealList.filter(item => !(item.type.includes("buffet")));
  }

  if (!others.checked) {
    mealList = mealList.filter(item => !(item.type.includes("others")));
  }

  console.log(mealList)
}


// Meal Raondom
function ramdonMeal() {
  const random = Math.floor(Math.random() * mealList.length);
  if(mealList.length === 0) {
    //Render
    order.innerText = "吃土";
    return;
  }
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
let id;
function debounce(func, delay) {
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay)
}
// https://www.themealdb.com/api/json/v1/1/random.php
async function searchMeal() {
    let mealname = document.getElementById("search").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealname}`
    let res = await fetch(url)
    let ans = await res.json();
    console.log(ans.meals);
    append(ans.meals);
}
function append(ans) {
    let append_meal = document.getElementById("append_meal");
    append_meal.innerHTML = null;
    ans.forEach(elem => {
        let meal_card = document.createElement("div");
        meal_card.setAttribute("class", "meal_card");

        let img = document.createElement("img");
        img.src = elem.strMealThumb;
        meal_card.append(img);

        let h2 = document.createElement("h2");
        h2.innerText = elem.strMeal;
        meal_card.append(h2);

        let h3 = document.createElement("h3");
        h3.innerText = 'Ingredients'

        meal_card.append(h3)

        let meal_info = document.createElement("meal_info");
        meal_info.setAttribute("class", "meal_info");
        meal_card.append(meal_info);

        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");

        li1.innerText = elem.strIngredient1;
        li2.innerText = elem.strIngredient2;
        li3.innerText = elem.strIngredient3;

        meal_info.append(ul);
        ul.append(li1, li2, li3);

        append_meal.append(meal_card);
    })
}

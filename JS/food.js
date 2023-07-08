function loadFoodData(){
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayFoods(data.meals))
}


function displayFoods(foods){
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML='';
    foods.forEach(food=>{
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('flex');
        itemDiv.classList.add('flex-row');
        itemDiv.classList.add('rounded-lg');
        itemDiv.classList.add('border-slate-500');
        itemDiv.innerHTML=`
            <div>
                <img src="${food.strMealThumb}" class="food-image" alt="">
            </div>
            <div class="my-12 mx-6">
                <h4 class="text-xl font-semibold text-left">${food.strMeal}</h4>
                <p class="text-slate-500 text-left mt-4 mb-6">There are many variations of <br> passages of available, but the <br> majority have suffered</p>
                <button class="bg-amber-500 py-2 px-5 rounded-lg font-bold text-sm">View Details</button>
            </div>
        `;
        foodContainer.appendChild(itemDiv);
    })

}
/*
const searchMeal =() =>{
    const searchText = document.getElementById('btn-search').value;
    loadFoodData(searchText);
}
*/
loadFoodData();
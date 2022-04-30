let navbar = () => {
    return `<h1 id="home_page">Meal API</h1>
    <input type="text" id="search" oninput="debounce(searchMeal,2000)" placeholder="Search...">
    <div id="logsin">
        <a href="random.html">Todays_Recipe</a>
        <a href="login.html">Login</a>
        <a href="signup.html">SignUp</a>
    </div>`
}
export default navbar;
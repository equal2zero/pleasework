import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './component/search-box/search-box.component';
import Recipe from './component/card-list/card-list.component';


const App = () =>{

  const APP_ID = "9e1eab25";
  const APP_KEY = "9d731188fb1f923cb14dacbc565c7740";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] =useState("");
  const [update, setUpdate] = useState('Pasta')
  
  useEffect( () =>{
    getRecipes();
  }, [update]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${update}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const getUpdate = e => {
    e.preventDefault();
    setUpdate(search);
    setSearch('');
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={getUpdate} className="search">
        <input className="searchfield" type="text" value={search} onChange={updateSearch}/>
        <button className="searchbutton" type="submit">Search</button>
      </form>
      {recipes.map(item => (
        <Recipe 
        key={item.recipe.label}
        title ={item.recipe.label} 
        calories ={item.recipe.calories} 
        image={item.recipe.image}
        ingred={item.recipe.ingredients}
        share={item.recipe.url} 
        ctype={item.recipe.cuisineType} 
        servesss={item.recipe.yield}
        />
      ))}
    </div>
  );
      
};

export default App;

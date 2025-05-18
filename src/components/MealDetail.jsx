import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      setMeal(data.meals ? data.meals[0] : null);
     

    };

    fetchMeal();
  }, [id]);

  if (!meal) return <h3 className="text-center mt-5">Hehe !!!! Meal not Found ...</h3>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{meal.strMeal}</h2>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="img-fluid d-block mx-auto mb-4"
        style={{ borderRadius: '15px', border: '3px solid orange' }}
      />
      <p ><strong>Category:</strong> {meal.strCategory}</p>
      <p ><strong>Area:</strong> {meal.strArea}</p>
      <p><strong>Instructions:</strong></p>
      <p className='custom-font'>{meal.strInstructions}</p>
      <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="btn btn-danger mt-3">
        Watch on YouTube
      </a>
    </div>
  );
};

export default MealDetail;

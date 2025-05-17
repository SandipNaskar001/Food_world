import React, { useEffect, useState } from 'react';

const Food = () => {
  const [mealdata, setMealData] = useState([]);
  const [area, setarea] = useState('indian');
  const [inputData, setInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      const data = await api.json();
      setMealData(data.meals);
      console.log(data.meals);
    };

    fetchData();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`);
    const data = await api.json();
    if (data.meals) {
      setMealData(data.meals);
    } else {
      setMealData([]);
    }
  };


  return (
    <>

      <div className="text-center my-4">
        <h1 style={{ fontWeight: 'bold', fontSize: '3rem', color: '#ff6600' }}>
          Welcome to Food World
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Discover delicious meals from around the globe! Click a region below to explore their traditional dishes.
        </p>
      </div>

      <div>

        <form onSubmit={submitHandler}>
          <div className="text-center my-4">
            <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Search for a meal..." className="form-control w-50 mx-auto" />
          </div>
        </form>
      </div>


      <div className="d-flex justify-content-center flex-wrap my-4">

        <button type="button" onClick={() => setarea("indian")} className="btn btn-outline-primary mx-2 my-1 btn-lg" >Indians</button>
        <button type="button" onClick={() => setarea("chinese")} className="btn btn-outline-info mx-2 my-1 btn-lg">Chinese</button>
        <button type="button" onClick={() => setarea("thai")} className="btn btn-outline-info mx-2 my-1 btn-lg">Thai</button>
        <button type="button" onClick={() => setarea("canadian")} className="btn btn-outline-info mx-2 my-1 btn-lg">Canadian</button>
        <button type="button" onClick={() => setarea("british")} className="btn btn-outline-info mx-2 my-1 btn-lg">British</button>
        <button type="button" onClick={() => setarea("russian")} className="btn btn-outline-info mx-2 my-1 btn-lg">Russian</button>
        <button type="button" onClick={() => setarea("italian")} className="btn btn-outline-info mx-2 my-1 btn-lg">Italian</button>
        <button type="button" onClick={() => setarea("american")} className="btn btn-outline-info mx-2 my-1 btn-lg">american</button>
     
      </div>


      <div className="container"

        style={{

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '40px',
          marginTop: '20px',
          marginBottom: '40px',




        }}>
        {mealdata.map((meal) => (
          <div
            key={meal.idMeal}
            className="p-2"
            style={{
              width: '250px',
              textAlign: 'center',
              border: '1px solid #ddd',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
            }}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{
                height: '280px',
                width: '100%',
                borderRadius: '10px',
                border: '2px solid orange',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
            <h5 className="mt-3 mb-3" style={{ color: '#333' }}>
              {meal.strMeal}
            </h5>
          </div>

        ))}

      </div>
    </>
  );
};

export default Food;


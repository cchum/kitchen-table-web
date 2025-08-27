import React, { useState } from 'react';

function InventoryList() {

    const [foods, setFoods] = useState([]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f =>[...f, newFood]);

    }

    function handleRemoveFood(index){
        
        setFoods(foods.filter((_, i) => i !== index));

    }

    return (
    <div className="inventory-list">
                <h2>Inventory List</h2>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index}>
                        <span className="text">{food}</span>
                        <button
                            className="delete-button"
                            onClick={() => handleRemoveFood(index)}>
                            delete
                        </button>
                    </li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="Enter Inventory Here"/>
                <button onClick={handleAddFood}>Add Inventory</button>
            </div>)

}

export default InventoryList;
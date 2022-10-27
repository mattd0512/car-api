import React from "react"

const CarUpdate = ({ car, handleChange, handleUpdateCar }) => {
    return (
        <>
            <input
                type='text' 
                value={car.make} 
                name='make' 
                onChange={handleChange}
            />
            <input
                type='text' 
                value={car.model} 
                name='model' 
                onChange={handleChange} 
            />
            <input
                type='text' 
                value={car.year} 
                name='year' 
                onChange={handleChange}
            />
            <button onClick={handleUpdateCar}>Update car</button>      
         </>
    )
}

export default CarUpdate
import React, { useEffect, useState } from "react"
import { carIndex } from "../api/car"
import { Link } from "react-router-dom"

const CarIndex = ({ user, msgAlert }) => {
    
    const [allCars, setAllCars] = useState([])

    useEffect(() => {
        carIndex(user)
        .then(res => {
            setAllCars(res.data.cars)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Pet Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allCarsJSX = allCars.map(car => {
        return (
            <Link to={car._id}>
                <li key={car._id}>Make: {car.make} Model: {car.model} Year {car.year}</li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allCarsJSX}</ul>
        </>
    )
}

export default CarIndex
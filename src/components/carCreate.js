import React, { useState } from 'react' 
import { carCreate } from '../api/car'

const CarCreate = ({ user, msgAlert }) => {

    const defaultCar = {
        make: '',
        model: '',
        year: ''
    }

    const [car, setCar] = useState(defaultCar)

    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const handleCreateCar = () => {
        carCreate(car, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Add Car',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Failure to add car' + error,
                variant: 'danger'
            })
        })
    }

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
				<button onClick={handleCreateCar}>Add car</button>
			</>
		)
}

export default CarCreate
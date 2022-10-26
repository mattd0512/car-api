import React, { useState } from 'react' 
import { carCreate } from '../api/car'

const CarCreate = ({ user, msgAlert }) => {

    const defaultCar = {
        make: '',
        model: ''
    }

    const [car, setCar] = useState(defaultCar)

    const handleChange = (event) => {
        setCar({...car, [event.target.make]: event.target.value})
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
					name='name'
					onChange={handleChange}
				/>
				<input
					type='text'
					value={car.model}
					name='name'
					onChange={handleChange}
				/>
				<button onClick={handleCreateCar}>Add car</button>
			</>
		)
}

export default CarCreate
import { useState } from 'react'
import { create } from '../api/crud'
import { useNavigate } from 'react-router-dom'
import { Car } from '../models/Car'

export const useCreateHook = () => {
  const navigate = useNavigate()
  const [vehicle, setVehicle] = useState(Car)
  const [error, setError] = useState("")

  const onChange = (event) => {
    const { name, value } = event.target
    setVehicle({ ...vehicle, [name]: value })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    
    try {
      await create(vehicle)
      setError("Vehículo añadido")
      // navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  return { error, onChange, onSubmit }
}

export const useDeleteHook = () => {}

export const useReadHook = () => {}

export const useUpdateHook = () => {}

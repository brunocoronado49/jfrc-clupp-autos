import { useState } from 'react'
import { create, uploadImage } from '../api/crud'
import { useNavigate } from 'react-router-dom'
import { Car } from '../models/Car'

export const useCreateHook = () => {
  // const navigate = useNavigate()
  const [vehicle, setVehicle] = useState(Car)
  const [image, setImage] = useState(null)
  const [error, setError] = useState("")

  const onChange = (event) => {
    const { name, value } = event.target
    setVehicle({ ...vehicle, [name]: value })
  }

  const onChangeImage = (e) => {
    setImage(e.target.files[0])
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    
    try {
      await create(vehicle)
      const result = await uploadImage(image)
      console.log(result)
      setError("Vehículo añadido")
      // navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  return { image, error, onChange, onChangeImage, onSubmit }
}

export const useDeleteHook = () => {}

export const useReadHook = () => {}

export const useUpdateHook = () => {}

import { useState } from 'react'
import { Car } from '../models/Car'

export const useCreateHook = () => {
  const [car, setCar] = useState(Car)

  const onSubmit = () => {
    
  }
}
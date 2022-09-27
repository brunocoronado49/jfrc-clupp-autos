import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs
} from 'firebase/firestore'
import { database } from '../config/firebase'

const collectionName = "vehicles"

export const create = (newCar) => {
  addDoc(collection(database, collectionName), newCar)
}

export const getVehicles = () => {
  getDocs(collection(database, collectionName))
}

export const getVehicle = (id) => {
  getDoc(doc(database, collectionName), id)
}

export const updateVehicle = (id, fields) => {
  updateDoc(doc(database, collectionName, id), fields)
}

export const deleteVehicle = (id) => {
  deleteDoc(doc(database, collectionName, id))
}
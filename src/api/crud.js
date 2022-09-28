import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { app } from '../config/firebase'
import { v4 } from 'uuid'
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

/// To upload files in storage firebase
export const storage = getStorage(app)
export const uploadImage = async (file) => {
  const storageRef = ref(storage, v4())
  return await uploadBytes(storageRef, file)
}

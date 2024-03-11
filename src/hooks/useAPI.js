import { db } from '../firebaseConfig'
import {
  collection,
  addDoc,
  doc,
  getDocs,
  updateDoc,
  FieldValue,
} from 'firebase/firestore'

export const useAPI = () => {
  const addMatch = async (awayGoals, awayPlayer, homeGoals, homePlayer) => {
    try {
      const docRef = await addDoc(collection(db, 'matches'), {
        awayGoals,
        awayPlayer,
        homeGoals,
        homePlayer,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const updatePlayerStats = async (playerId, goalsFor, goalsAgainst) => {
    const playerDocRef = doc(db, 'players', playerId)
    try {
      await updateDoc(playerDocRef, {
        goalsFor: FieldValue.increment(goalsFor),
        goalsAgainst: FieldValue.increment(goalsAgainst),
        matchesPlayed: FieldValue.increment(1),
      })
      console.log('Player goals incremented by 2!')
    } catch (e) {
      console.error('Error updating player document: ', e)
    }
  }

  const getAllPlayers = async () => {
    const players = await getDocs(collection(db, 'players'))
    return players
  }

  const getAllMatches = async () => {
    const matches = await getDocs(collection(db, 'matches'))
    return matches
  }
  return {
    addMatch,
    updatePlayerStats,
    getAllPlayers,
    getAllMatches,
  }
}

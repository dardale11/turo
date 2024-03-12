import { db } from '../firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from 'firebase/firestore';
import { Match, Player } from '../types';

export const useAPI = () => {
  const addMatch = async (match: Match) => {
    try {
      const docRef = await addDoc(collection(db, 'matches'), match);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const addPlayer = async (player: Player) => {
    try {
      const docRef = await addDoc(collection(db, 'players'), {
        ...player,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const updatePlayerStats = async (player, goalsFor, goalsAgainst) => {
    const playersQuery = query(
      collection(db, 'players'),
      where('name', '==', player.name)
    );

    try {
      const querySnapshot = await getDocs(playersQuery);
      if (querySnapshot.empty) {
        console.error('No player found with the name: ', player.name);
        return;
      }

      const playerDoc = querySnapshot.docs[0];

      // Update the player's stats
      await updateDoc(playerDoc.ref, {
        goalsFor: playerDoc.data().goalsFor + goalsFor,
        goalsAgainst: playerDoc.data().goalsAgainst + goalsAgainst,
        matchesPlayed: playerDoc.data().matchesPlayed + 1,
        wins: playerDoc.data().wins + goalsFor > goalsAgainst ? 1 : 0,
        losses: playerDoc.data().losses + goalsFor < goalsAgainst ? 1 : 0,
        draws: playerDoc.data().draws + goalsFor === goalsAgainst ? 1 : 0,
      });

      console.log('Player stats updated successfully!');
    } catch (e) {
      console.error('Error updating player document: ', e);
    }
  };

  const getAllPlayers = async () => {
    const players = await getDocs(collection(db, 'players'));
    return players;
  };

  const getAllMatches = async () => {
    const matches = await getDocs(collection(db, 'matches'));
    return matches;
  };
  return {
    addPlayer,
    addMatch,
    updatePlayerStats,
    getAllPlayers,
    getAllMatches,
  };
};

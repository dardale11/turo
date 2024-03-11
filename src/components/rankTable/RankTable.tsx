import React, { useState } from 'react';
import style from './style.module.css';

const RankTable = ({ players }) => {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (field: string) => {
    if (field === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const sortedPlayers = players.slice().sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return a[sortBy] > b[sortBy] ? order : -order;
  });

  return (
    <div className={style.container}>
      <div className={style.tableContainer}>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>Name</th>
              <th onClick={() => handleSort('total')}>Total</th>
              <th onClick={() => handleSort('matches')}>Matches</th>
              <th onClick={() => handleSort('wins')}>Wins</th>
              <th onClick={() => handleSort('ties')}>Ties</th>
              <th onClick={() => handleSort('losses')}>Losses</th>
              <th onClick={() => handleSort('goals')}>Goals</th>
              <th onClick={() => handleSort('goalsIn')}>Goals In</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((player, index) => (
              <tr key={index}>
                <td>
                  <div className={style.nameWrapper}>
                    <img src={player.imageUrl} alt='a' />
                    {player.name}
                  </div>
                </td>
                <td>{player.total}</td>
                <td>{player.matches}</td>
                <td>{player.wins}</td>
                <td>{player.ties}</td>
                <td>{player.losses}</td>
                <td>{player.goals}</td>
                <td>{player.goalsIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankTable;

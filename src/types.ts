export type House = 'A' | 'B' | 'C' | 'D' | 'M';

export type Player = {
  house: House;
  draws: number;
  goalsAgainst: number;
  goalsFor: number;
  imageUrl: string;
  losses: number;
  matchesPlayed: number;
  name: string;
  wins: number;
};

export type Match = {
  awayGoals: number;
  awayPlayer: Player | null;
  homeGoals: number;
  homePlayer: Player | null;
};

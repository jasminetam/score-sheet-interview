export interface dataProps {
  studName: string;
  score: number;
  studClass: string;
}
export interface studDataProps {
  id: string;
  data: {
    studName: string;
    score: number;
    studClass: string;
  };
}

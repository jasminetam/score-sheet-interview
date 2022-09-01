export interface dataProps {
  studname: string;
  score: number;
  class: string;
}
export interface studDataProps {
  id: string;
  data: {
    studname: string;
    score: number;
    class: string;
  };
}

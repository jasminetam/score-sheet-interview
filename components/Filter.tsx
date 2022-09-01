import { studDataProps } from 'interface/interface';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  data: studDataProps[];
  setFilteredData: React.Dispatch<React.SetStateAction<studDataProps[]>>;
  classes: string[]
}

function Filter({ data, setFilteredData, classes }: Props) {
  const router = useRouter();
  const [checked, setChecked] = useState(Array(classes.length).fill(false));
  const [upperScore, setUpperScore] = useState<number>(0);
  const [lowerScore, setLowerScore] = useState<number>(0);

  const handleFilter = (e: any) => {
    e.preventDefault();
    const filterClass = classes.filter((_, idx) => checked[idx]);
    const filteredScoreData = data
      .filter(
        (item) => item.data.score >= lowerScore && item.data.score <= upperScore
      )
      .filter((item) => filterClass.includes(item.data.class));

    filteredScoreData.length > 0
      ? setFilteredData(filteredScoreData)
      : alert('No record founded, please try again');
  };

  return (
    <div>
      <div>
        <label htmlFor="score">Score</label>
        <span>from</span>
        <input
          type="number"
          onChange={(e) => setLowerScore(parseInt(e.target.value))}
          placeholder="0"
          required
        />
        <span>to</span>
        <input
          type="number"
          onChange={(e) => setUpperScore(parseInt(e.target.value))}
          placeholder="100"
          required
        />
      </div>
      <label htmlFor="class">Class</label>
      {classes.map((cls, idx) => {
        return (
          <>
            <input
              key={idx}
              type="checkbox"
              onChange={() =>
                setChecked((prev) =>
                  prev.map((p, pidx) => (idx === pidx ? !p : p))
                )
              }
              value={checked[idx]}
              name={cls}
            />
            <label htmlFor={cls}>{cls}</label>
          </>
        );
      })}

      <button type="submit" onClick={handleFilter}>
        Filter
      </button>
      <button onClick={() => router.reload()}>Clear filter</button>
    </div>
  );
}

export default Filter;

import { studDataProps } from 'interface/interface';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { translation_zh } from 'locales/zh';
import { translation_en } from 'locales/en';

interface Props {
  data: studDataProps[];
  setFilteredData: React.Dispatch<React.SetStateAction<studDataProps[]>>;
  classes: string[];
}

function Filter({ data, setFilteredData, classes }: Props) {
  const router = useRouter();
  const [checked, setChecked] = useState(Array(classes?.length).fill(false));
  const [upperScore, setUpperScore] = useState<number>(100);
  const [lowerScore, setLowerScore] = useState<number>(0);
  const lang = router?.locale == 'en' ? translation_en : translation_zh;

  const handleFilter = (e: any) => {
    e.preventDefault();
    const filterClass = classes?.filter((_, idx) => checked[idx]);
    const filteredScoreData = data
      .filter(
        (item) => item.data.score >= lowerScore && item.data.score <= upperScore
      )
      .filter((item) => filterClass.includes(item.data.studClass));

    filteredScoreData.length > 0
      ? setFilteredData(filteredScoreData)
      : alert(`${lang.noRecord}`);
  };

  const clearFilter = () => {
    setUpperScore(100);
    setLowerScore(0);
    setChecked(Array(classes?.length).fill(false));
    setFilteredData([]);
  };

  return (
    <>
      <div className="filter-container" data-test="components-Filter">
        <h2>{lang.filter}</h2>
        <div className="score-filter">
          <label htmlFor="score">{lang.score}</label>
          <span>{lang.from}</span>
          <input
            type="number"
            onChange={(e) => setLowerScore(parseInt(e.target.value))}
            value={lowerScore}
            required
          />
          <span>{lang.to}</span>
          <input
            type="number"
            onChange={(e) => setUpperScore(parseInt(e.target.value))}
            value={upperScore}
            required
          />
        </div>
        <div className="class-filter">
          <label htmlFor="class">{lang.class}</label>
          {classes?.map((cls, idx) => {
            return (
              <div key={idx}>
                <input
                  type="checkbox"
                  onChange={() =>
                    setChecked((prev) =>
                      prev.map((p, pidx) => (idx === pidx ? !p : p))
                    )
                  }
                  checked={checked[idx]}
                  name={cls}
                />
                <label htmlFor={cls}>{cls}</label>
              </div>
            );
          })}
        </div>
        <div className="filter-button-wrapper">
          <button type="submit" onClick={handleFilter}>
            {lang.filter}
          </button>
          <button onClick={clearFilter}>{lang.clearFilter}</button>
        </div>
      </div>
    </>
  );
}

export default Filter;

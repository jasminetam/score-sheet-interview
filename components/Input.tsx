import React, { useState } from 'react';
import { dataProps, studDataProps } from 'interface/interface';
import { v4 as uuidV4 } from 'uuid';
import { useRouter } from 'next/router';
import { translation_zh } from 'locales/zh';
import { translation_en } from 'locales/en';

interface Props {
  setStudData: (prev: any) => studDataProps[];
  classes: string[];
}

function Input({ setStudData, classes }: Props) {
  const [data, setData] = useState<dataProps[]>([]);
  const router = useRouter();
  const lang = router.locale == "en" ? translation_en : translation_zh


  const handleChange = (name: string, value: string | number) => {
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async () => {
    await setStudData((prev: any) => {
      return [...prev, { id: uuidV4(), data }];
    });
  };
  console.log(data);

  return (
    <div>
      <h1>Enter your Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studname">Student name:</label>
          <input
            type="text"
            name="studname"
            placeholder="Enter Student name"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="score">Score:</label>
          <input
            type="number"
            name="score"
            placeholder="Enter Score"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="class">Class:</label>
          {classes.map((item, idx) => {
            return (
              <>
                <input
                  type="radio"
                  name="class"
                  value={item}
                  key={idx}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  required
                />
                <label htmlFor={item}>{item}</label>
              </>
            );
          })}
        </div>
        <button>Create Record</button>
      </form>
    </div>
  );
}

export default Input;

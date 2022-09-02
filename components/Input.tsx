import React, { useState } from 'react';
import { dataProps, studDataProps } from 'interface/interface';
import { v4 as uuidV4 } from 'uuid';
import { useRouter } from 'next/router';
import { translation_zh } from 'locales/zh';
import { translation_en } from 'locales/en';
import { BsPersonCircle } from 'react-icons/bs';
import { GrScorecard } from 'react-icons/gr';
import { MdMeetingRoom } from 'react-icons/md';
import { CgFileDocument } from 'react-icons/cg';

interface Props {
  setStudData: (prev: any) => studDataProps[];
  classes: string[];
 
}

function Input({ setStudData, classes }: Props) {
  const [data, setData] = useState<dataProps>({ studName: "", score: 0, studClass: "" });
  const router = useRouter();
  const lang = router?.locale == 'en' ? translation_en : translation_zh;

  const handleChange = (name: string, value: string | number) => {
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStudData((prev: any) => {
      return [...prev, { id: uuidV4(), data }];
    });
    setData({ studName: "", score: 0, studClass: "" })
  };
 

  return (
    <div className="input-form" data-test="components-Input">
      <h2>{lang.enterDetails}</h2>
      <form className="input-details" onSubmit={handleSubmit}>
        <div className="student-name">
          <label htmlFor="studName">
            <BsPersonCircle />
            <span>{lang.studentName}:</span>
          </label>
          <input
            type="text"
            name="studName"
            placeholder={lang.enterStudentName}
            value={data.studName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="score">
          <label htmlFor="score">
            <GrScorecard />
            <span>{lang.score}:</span>
          </label>
          <input
            type="number"
            name="score"
            value={data.score}
            placeholder={lang.enterScore}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="class">
          <label htmlFor="class">
            <MdMeetingRoom />
            <span>{lang.class}:</span>
          </label>
          {classes?.map((item, idx) => {
            return (
              <div key={idx}>
                <input
                  type="radio"
                  name="studClass"
                  value={item}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  required
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </div>
        <div className="button-wrapper">
          <button type="submit">
            <span>{lang.createRecord}</span>
            <CgFileDocument />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;

import React, { useEffect, useState } from 'react';
import { studDataProps } from '../interface/interface';
import {useRouter} from "next/router"

interface Props {
  data: studDataProps[];
  setStudData: React.Dispatch<React.SetStateAction<studDataProps[]>>;
}

function Table({ data, setStudData }: Props) {
 const router = useRouter()

  const handleDelete = ({ id }: any) => {
    setStudData((prevData: studDataProps[]) => {
      return prevData.filter((studData) => studData.id !== id)
    });
    router.reload()
  };
  
  const handleClear = () => {
    window.localStorage.removeItem("Student Data")
    router.reload()
  }


  return (
    <>
      {data?.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Score</th>
                <th>Class</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data.map((item) => (
                  <tr key={item?.id}>
                    <td>{item?.data.studname}</td>
                    <td>{item?.data.score}</td>
                    <td>{item?.data.class}</td>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                  </tr>
                ))}
            </tbody>
          </table>
          <button onClick={handleClear}>Clear All Data</button>
        </div>
      ) : (
        <div>No Student Data</div>
      )}
    </>
  );
}

export default Table;

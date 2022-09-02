import React from 'react';
import { studDataProps } from '../interface/interface';
import { useRouter } from 'next/router';
import { translation_zh } from 'locales/zh';
import { translation_en } from 'locales/en';

interface Props {
  data: studDataProps[];
  setStudData: React.Dispatch<React.SetStateAction<studDataProps[]>>;
}

function Table({ data, setStudData }: Props) {
  const router = useRouter();
  const lang = router?.locale == 'en' ? translation_en : translation_zh;

  const handleDelete = ({ id }: any) => {
    data.length == 1
      ? setStudData([])
      : setStudData((prevData: studDataProps[]) => {
        return prevData.filter((studData: any) => studData.id !== id);
    });
  };

  const handleClear = () => {
    window.localStorage.removeItem('Student Data');
    router.reload();
  };

  return (
    <div data-test="components-Table">
      {data?.length > 0 ? (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>{lang.studentName}</th>
                <th>{lang.score}</th>
                <th>{lang.class}</th>
                <th>{lang.function}</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data.map((item) => (
                  <tr key={item?.id}>
                    <td>{item?.data.studName}</td>
                    <td>{item?.data.score}</td>
                    <td>{item?.data.studClass}</td>
                    <td>
                      <button onClick={() => handleDelete(item)}>
                        {lang.delete}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="table-button-wrapper">
            <button onClick={handleClear}>{lang.clearAllData}</button>
          </div>
        </div>
      ) : (
        <div className="table-noData">{lang.noStudentData}</div>
      )}
    </div>
  );
}

export default Table;

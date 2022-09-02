import Filter from 'components/Filter';
import FilterBtn from 'components/FilterBtn';
import Header from 'components/Header';
import Input from 'components/Input';
import Layout from 'components/Layout';
import Table from 'components/Table';
import useLocalStorage from 'hooks/useLocalStorage';
import { studDataProps } from 'interface/interface';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const classes = ['A', 'B', 'C'];

const Home: NextPage = () => {
  const [studData, setStudData] = useLocalStorage('Student Data', []);
  const [data, setData] = useState<studDataProps[]>([]);
  const [filteredData, setFilteredData] = useState<studDataProps[]>(data);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setData(filteredData.length > 0 ? filteredData : studData);
  }, [data, filteredData, studData]);

  return (
    <>
      <Layout>
        <Header />
        <Input setStudData={setStudData} classes={classes} />
        <hr />
        {data?.length > 1 &&
          (show ? (
            <>
              <Filter
                data={data}
                setFilteredData={setFilteredData}
                classes={classes}
              />
              <FilterBtn show={show} setShow={setShow} />
              <hr />
            </>
          ) : (
            <>
              <FilterBtn show={show} setShow={setShow} />
              <hr />
            </>
          ))}
        <Table data={data} setStudData={setStudData} />
      </Layout>
    </>
  );
};

export default Home;

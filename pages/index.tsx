import Filter from 'components/Filter';
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

  useEffect(() => {
    setData(filteredData.length > 0 ? filteredData : studData);
  }, [data, filteredData]);

  return (
    <>
      <Layout>
        <Input setStudData={setStudData} classes={classes} />
        {data.length > 0 && <Filter data={data} setFilteredData={setFilteredData} classes={classes} />}
        <Table data={data} setStudData={setStudData} />
      </Layout>
    </>
  );
};

export default Home;

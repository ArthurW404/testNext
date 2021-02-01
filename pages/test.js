import React from "react";
import useSWR from "swr";
import Header from "../components/Header";

const fetcher = (url) => fetch(url).then((res) => res.json());

const test = () => {
  const { data, error } = useSWR("/api/hello", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header title="test" />
      <p>hello {data.name}</p>
    </>
  );
};

export default test;

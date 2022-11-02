import './App.css';
import { useState, useEffect } from 'react';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function GetRaceInfo() {

  const seasons_races = {
    "1950": 7, "1951": 8, "1952": 8, "1953": 9, "1954": 9, "1955": 7, "1956": 8, "1957": 8, "1958": 11, "1959":9, "1960": 10, "1961": 8,
    "1962": 9, "1963": 10, "1964": 10, "1965": 10, "1966": 9, "1967": 11, "1968": 12, "1969": 11, "1970": 13, "1971": 11, "1972": 12, "1973": 15,
    "1974": 15, "1975": 14, "1976": 16, "1977": 17, "1978": 16, "1979": 15, "1980": 14, "1981": 15, "1982": 16, "1983": 15, "1984": 16, "1985": 16,
    "1986": 16, "1987": 16, "1988": 16, "1990": 16, "1991": 16, "1992": 16, "1993": 16, "1994": 16, "1995": 17, "1996": 16, "1997": 17, "1998": 16,
    "1999": 16, "2000": 17, "2001": 17, "2002": 17, "2003": 16, "2004": 18, "2005": 19, "2006": 18, "2007": 17, "2008": 18, "2009": 17, "2010": 19,
    "2011": 19, "2012": 20, "2013": 19, "2014": 19, "2015": 19, "2016": 21, "2017": 20, "2018": 21, "2019": 21, "2020": 17, "2021": 22, "2022": 22
  };

  let rnd_year = getRndInteger(1950, 2022);
  let race_num = getRndInteger(1, seasons_races[rnd_year] + 1);
  let api_call = `http://ergast.com/api/f1/${rnd_year}/${race_num}/results.json`

  const [info, setInfo] = useState([]);
  const getAPI = () => {
    fetch(api_call)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setInfo(json)
      });
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="App">
      <h1>F1 Race Info</h1>
      <useEffect></useEffect>
      {JSON.stringify(info, null, 2)}

    </div>
  );
}

export default GetRaceInfo;

function getNameInObject(obj) {
  if (!obj) return;
  const names = Object.keys(obj);
  return obj[names[0]].name || obj[names[0]].common;
}

function getLanguages(obj) {
  const allKeys = obj ? Object?.keys(obj) : [];
  // use keys to get all values, and return array of languages
  return allKeys.map((key) => obj[key]);
}

function organizeData(data) {
  // some countries have missing information
  const organizedData = data.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      nativeName: getNameInObject(country.name.nativeName), // return common name
      population: country.population,
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital && country.capital[0],
      topLevelDomain: country.tld && country.tld[0],
      currencies: getNameInObject(country.currencies), // return name
      languages: getLanguages(country.languages), // array of languages
      borders: country.borders, // array
      flag: country.flags.svg,
    };
  });

  return organizedData;
}

export default organizeData;

export async function fetchApiData(url) {
  const fetchData = await fetch(url);
  const getData = await fetchData.json();
  return getData;
}

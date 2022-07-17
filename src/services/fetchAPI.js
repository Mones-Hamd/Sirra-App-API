export async function fetchApiData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const getData = await response.json();
    return getData;
  } else {
    throw new Error('sorry something goes wrong');
  }
}

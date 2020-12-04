async function getPromo() {
  let response = await axios.get("promotion.json");
  return response.data;
}
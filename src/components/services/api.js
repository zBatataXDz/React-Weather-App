const KEY = '9f0a5eb2d9b84558be0211256220606'

async function fetchData(city) {

    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`

    const fetchResponse = await fetch(url)
    const data = await fetchResponse.json()
    return data
    
}
export default fetchData
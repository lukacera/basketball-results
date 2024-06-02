export const getAllCountries = async () => {
    try {
        const response = await fetch("https://api-basketball.p.rapidapi.com/countries", {
            headers: {
                "X-RapidAPI-Key": "547e99a4bbmshbf93b98fa0f02b5p1006e8jsnac1e74d5f940",
                "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            return false
        }

        const data = await response.json()
        return data.response

    } catch (error) {
        console.log("Error occured while fetching games " + error)
    }
}

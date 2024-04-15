export const getStandings = async (leagueID: number) => {
    try {
        const response = await fetch(`https://api-basketball.p.rapidapi.com/standings?league=${leagueID}&season=2023-2024`, {
            headers: {
                "X-RapidAPI-Key": "547e99a4bbmshbf93b98fa0f02b5p1006e8jsnac1e74d5f940",
                "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            console.log("Response is not ok!")
            return
        }

        const data = await response.json()

        // If league requires yyyy-yyyy format, instead of yyyy format
        if (data.response.length === 0) {
            const newResponse = await fetch(`https://api-basketball.p.rapidapi.com/standings?league=${leagueID}&season=2023`, {
                headers: {
                    "X-RapidAPI-Key": "547e99a4bbmshbf93b98fa0f02b5p1006e8jsnac1e74d5f940",
                    "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
                    "Content-Type": "application/json"
                }
            })

            if (!newResponse.ok) {
                console.log("Response is not ok!")
                return
            }

            const newResponseData = await newResponse.json()
            console.log(newResponseData.response[0][0])
            return newResponseData.response[0]
        }


        console.log(data.response[0][0])
        return data.response[0]
    } catch (error) {
        console.log("Error occured while fetching games " + error)
    }
}
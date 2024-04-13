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
            console.log("This is newResponse data:")
            console.log(newResponseData)
            return newResponseData.response
        }


        return data.response

    } catch (error) {
        console.log("Error occured while fetching games " + error)
    }
}
export const getH2HScore = async (team1ID: number, team2ID: number) => {
    try {
        const response = await fetch(`https://api-basketball.p.rapidapi.com/games?h2h=${team1ID}-${team2ID}`, {
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
        console.log(data.response)
        return data.response

    } catch (error) {
        console.log("Error occured while fetching games " + error)
    }
}
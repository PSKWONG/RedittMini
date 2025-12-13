

const commentFetch = async (req, context) => {

    try {

        /* Get information  from query string 
            @(?id=postID)
        */
        const urlParams = new URL(req.url).searchParams;
        const postID = urlParams.get("id");

        //Fetch Information from Redit 
        const baseURL = `https://www.reddit.com`;
        const query = `/comments/${postID}.json`;
        const apiKey = process.env.SCRAPERAPI_KEY;
        const fetchURL = `https://api.scraperapi.com?api_key=${apiKey}&url=${baseURL}${query}`




        const response = await fetch(`${fetchURL}`);

        const data = await response.json();

        //The comment located at the second object of the response
        const commentData = data[1]?.data?.children;

        return new Response(JSON.stringify(commentData), {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"

            }
        });

    } catch (err) {

        console.log(
            `Error in Reddit Fetching 
                # Error: ${JSON.stringify(err, 2, 0)}
            `
        )

        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });

    }

};

export default commentFetch; 
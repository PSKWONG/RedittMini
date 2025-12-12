

const commentFetch = async (req, context) => {

    try {

        /* Get information  from query string 
            @(?id=postID)
        */
        const urlParams = new URL(req.url).searchParams;
        const postID = urlParams.get("id");

        //Fetch Information from Redit 
        //const baseURL = `https://www.reddit.com`;
        //const query = `/comments/${postID}.json`;

        // --- TEMPORARY TEST LINES ---
        const baseURL = `https://www.reddit.com`;
        const query = `/r/popular/top.json?limit=1`; // Fetches the top single post from r/popular
        // --- END TEMPORARY TEST LINES ---

        const response = await fetch(`${baseURL}${query}`, {
            headers: {
                "User-Agent": "nodejs:reditmini:v1.0 (by /u/Least_Imagination355)"
            }
        });

        //Secondary Improvement: Check for HTTP errors like 403
        if (!response.ok) {
            // This will throw an error that your catch block can read more cleanly
            throw new Error(`Reddit API returned ${response.status} Error: ${response.statusText || 'Forbidden'}`);
        }

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
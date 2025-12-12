

const reditFetch = async (req, context) => {

    try {

        /* Get information  from query string 
            @(?keyword=popular)
            @(?type=page / type =search)
        */
        const urlParams = new URL(req.url).searchParams;
        const type = urlParams.get("type") || "searching";
        const keyword = urlParams.get("keyword") || "popular";

        //Fetch Information from Redit 
        const baseURL = `https://www.reddit.com`;
        const query = type === "searching" ? `/search.json?q=${encodeURIComponent(keyword)}` : `/r/${keyword}/.json`;

        const response = await fetch(`${baseURL}${query}`);
        if (!response.ok) {
            throw new Error(`Reddit API returned ${response.status}`);
        }
        const data = await response.json();
        const pageData = data?.data?.children

        return new Response(JSON.stringify(pageData), {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "User-Agent": "web:reditmini:v1.0 (by developer)"
            }
        });

    } catch (err) {

        console.error("Error in Reddit Fetching:", err.message, err.stack);

        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });

    }

};

export default reditFetch; 
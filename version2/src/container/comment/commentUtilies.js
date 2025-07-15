import {timeCount} from '../../features/postDisplay/postUtilities'; 

//Helper function on extracting and sorting information 
export const extractInformation = (list) => {

    let t1Map = new Map(); 
    let moreMap = null; 

    if (list.length === 0) {
        return { t1Map ,  moreMap}
    }

    //Extract response Data
    list.forEach(({ kind, data }) => {
        if (kind === 't1') {
            const extratedData = (
                {
                    // Identification
                    id: data.id,

                    //Comment
                    author: data.author,
                    body: data.body,
                    duration: timeCount(data.created),

                    //Replies
                    reply: data.replies?.data?.children ?? [],

                }
            );
            t1Map.set(data.id, extratedData)
        } else if (kind === 'more') {
            moreMap = data;
        }
    })

    return { t1Map , moreMap }; 

}
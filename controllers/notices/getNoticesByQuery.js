const { Notice } = require('../../models')
const {HttpError} = require('../../helpers')

const getNoticesByQuery = async (req, res) => {
    const { category, query, own, favotite } = req.query;
    
    // own = true/false
    // favorite = true/false
    // category = ""lost-found", "sell", "in-good-hands""
    // query = "..."

    const userId = req?.user?._id ?? '';
    
   
    let searchOptions = {};
    const convertedQuery= query.replaceAll("-", " ")

    if (category) {
        let convertedCategory
        switch (category) {
            case "in-good-hands":
                convertedCategory = category.replaceAll("-", " ");
                break;
            case "lost-found":
                convertedCategory = category.replaceAll("-", "/")
                break;
            case "sell":
                convertedCategory = category;
                break
            default: throw HttpError(400, 'Unknown category')
        }
        // const convertedCategory = category.replaceAll("-", " ")
        searchOptions = {
            $text: { $search: `${convertedQuery}` },
            adopStatus: convertedCategory
        }
    }
    if (favotite) {
        searchOptions = {
            $text: { $search: `${convertedQuery}` },
            favorite: userId
        }
    }
    if (own) {
        searchOptions = {
            $text: { $search: `${convertedQuery}` },
            "owner._id" : userId
        }
    }

    const filteredNotices = await Notice.find(searchOptions)
        .sort({ createdAt: -1 });
    
    if (filteredNotices.length === 0) {
        throw HttpError(404)
    }

    res.json({filteredNotices})
}

module.exports = getNoticesByQuery;
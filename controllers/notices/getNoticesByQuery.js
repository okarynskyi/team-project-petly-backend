const { Notice } = require('../../models')
const {HttpError} = require('../../helpers')

const getNoticesByQuery = async (req, res) => {
    const { category, query, own, favotite } = req.query;
    
    // own = true/false
    // favorite = true/false
    // category = ""lost-found", "sell", "in-good-hands""
    // query = "..."

    const userId  = req?.user?._id ?? '';
   
    let searchOptions={};

    if (category) {
        searchOptions = {
            $text: { $search: `${query}` },
            adopStatus: category
        }
    }
    if (favotite) {
        searchOptions = {
            $text: { $search: `${query}` },
            favorite: userId
        }
    }
    if (own) {
        searchOptions = {
            $text: { $search: `${query}` },
            "owner._id" : userId
        }
    }

    const filteredNitices = await Notice.find(searchOptions);
    
    if (filteredNitices.length === 0) {
        throw HttpError(404)
    }

    res.json({filteredNitices})
}

module.exports = getNoticesByQuery;
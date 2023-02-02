// const { Notice } = require('../../models')
// const {HttpError} = require('../../helpers')

const getNoticesByQuery = async (req, res) => {
    // const {category, query, own, favotite} = req.query;
    // const owner = req?.user?._id ?? "";

    // if (category) {
    //     const filteredNitices = await Notice.find({ $text: { $search: `${query}` }, category })
    // } 
    // if (favotite) {
    //     const filteredNitices = await Notice.find({ $text: { $search: `${query}` }, owner })
    // }
}

module.exports = getNoticesByQuery;
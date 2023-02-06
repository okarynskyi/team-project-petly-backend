function buildQuery(req, searchParams) {
  const { query } = req.query;

  if (!query) {
    return searchParams;
  }
  const preparedQuery = query.trim().replaceAll("_", " ");
  return { ...searchParams, $text: { $search: `"${preparedQuery}"` } };
}

module.exports = buildQuery;

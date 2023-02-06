function buildQuery(req, searchParams) {
  const { query } = req.query;

  if (!query) {
    return searchParams;
  }
  const preparedQuery = query.trim().replace(/_./g, " ");
  return { ...searchParams, $text: { $search: `"${preparedQuery}"` } };
}

module.exports = buildQuery;

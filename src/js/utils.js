export function slugify(text) {
  return text.toString().toLowerCase().replace(" ", "-");
  // .replace(/\s+/g, '-')
  // .replace(/[^\w-]+/g, '')
  // .replace(/--+/g, '-')
  // .replace(/^-+/, '')
  // .replace(/-+$/, '');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US"); //, { timeZone: "UTC" })
}

export function formatBlogPosts(
  posts,
  {
    fliterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = 0,
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.frontmatter;

    // fliter out drafts if true
    if (fliterOutDrafts && draft) return acc;

    // filter out future posts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to acc
    acc.push(post);
    return acc;
  }, []);

  // Sort posts by date or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // Limit if number is passed
  if (limit > 0) {
    //(typeof limit === "number"){
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}

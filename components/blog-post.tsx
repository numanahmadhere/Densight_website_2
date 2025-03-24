export default function BlogPost({ post }) {
  return (
    <article itemScope itemType="http://schema.org/BlogPosting">
      <header>
        <h1 itemProp="headline">{post.title}</h1>
        <meta itemProp="datePublished" content={post.date} />
        <meta itemProp="author" content={post.author} />
      </header>
      <div itemProp="articleBody">{post.content}</div>
      {/* Add schema.org markup for the blog post */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: post.author,
          },
        })}
      </script>
    </article>
  )
}


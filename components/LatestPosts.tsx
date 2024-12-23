// components/LatestPosts.tsx

import { useEffect, useState } from 'react';
import { client } from '../tina/__generated__/client';

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResponse = await client.queries.postsConnection({
          first: 5, // Number of posts to fetch
          sort: 'date_DESC', // Sort by date in descending order
        });

        const fetchedPosts = postsResponse.data.postsConnection.edges.map(({ node }) => ({
          id: node.id,
          title: node.title,
          slug: node._sys.filename,
        }));

        setPosts(fetchedPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Latest Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>summary here</p>
            <a href={`/posts/${post.slug}`}>Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPosts;

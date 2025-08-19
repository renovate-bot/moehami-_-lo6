// components/LinkSuggestor.tsx
import React, { useState, useEffect } from 'react';
import { useForm, useField } from 'tinacms';
import { StringField } from 'tinacms/dist/fields';

interface Props {
  field: StringField;
}

const LinkSuggestor: React.FC<Props> = ({ field }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data: formData } = useForm();
  const [, { change }] = useField(field.name);

  useEffect(() => {
    // Debounce to prevent too many requests while typing
    const handler = setTimeout(() => {
      if (!formData.body) return;
      setIsLoading(true);

      fetch('/search-index/content-index.json')
        .then(res => res.json())
        .then(index => {
          // Perform a simple text search
          const relevantPosts = index.filter(item =>
            (item.title as string).toLowerCase().includes((formData.body as string).toLowerCase()) ||
            (item.body as string).toLowerCase().includes((formData.body as string).toLowerCase())
          );
          setSuggestions(relevantPosts.slice(0, 5)); // Limit to top 5 suggestions
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Failed to fetch search index:', err);
          setIsLoading(false);
        });
    }, 500);

    return () => clearTimeout(handler);
  }, [formData.body]);

  const insertLink = (title: string, slug: string) => {
    const link = `[${title}](/posts/${slug})`;
    const newBody = `${formData.body}\n\n${link}`;
    change(newBody);
  };

  return (
    <div>
      <h4>Suggested Internal Links:</h4>
      {isLoading && <p>Loading suggestions...</p>}
      {!isLoading && suggestions.length === 0 && <p>No relevant links found.</p>}
      <ul>
        {suggestions.map((post: { title: string; slug: string }) => (
          <li key={post.slug}>
            <strong>{post.title}</strong>
            <button onClick={() => insertLink(post.title, post.slug)}>Insert</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkSuggestor;

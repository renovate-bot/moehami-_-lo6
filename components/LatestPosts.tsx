import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from 'date-fns';

interface PostNode {
    id: string;
    title: string;
    author: string;
    date: string;
    image?: string | null;
    body?: any;
    _sys: {
        [key: string]: any;
    };
    seo?: {
        [key: string]: any;
    };
}

interface PostEdge {
    cursor: string;
    node: PostNode;
}

type PostsConnectionEdges = PostEdge[];

interface LatestPostsProps {
    posts: PostsConnectionEdges;
}

export default function LatestPosts({ posts }: LatestPostsProps) {
    // Sort posts by date, newer first
    const sortedPosts = [...posts].sort((a, b) => new Date(b.post.node.date) - new Date(a.post.node.date));

    return (
        <section className="container mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedPosts.length > 0 ? (
                    sortedPosts.map((post) => (
                        <Link href={`/posts/${post.node.id}`} key={post.node.id}>
                            <a>
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <div className="relative h-48">
                                        <Image
                                            src={post.node.image || ''}
                                            alt={post.node.title}
                                            fill
                                            className="object-cover rounded-t-lg"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{post.node.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {format(new Date(post.node.date), 'MMMM dd, yyyy')}
                                        </p>
                                    </CardHeader>
                                </Card>
                            </a>
                        </Link>
                    ))
                ) : (
                    <p>No posts found.</p>
                )}
            </div>
        </section>
    );
}

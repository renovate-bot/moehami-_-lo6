import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from 'date-fns';

import Link from 'next/link';

export default function LatestPosts({ posts }) {
        // Sort posts by date, newer first
        const sortedPosts = [...posts].sort((a, b) => new Date(b.node.date) - new Date(a.node.date));
    return (
        <section className="container mx-auto px-4 py-20">
            <h1 className="text-2xl md:text-3xl font-bold mb-8">Latest Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(sortedPosts) && sortedPosts.length > 0 ? (
                    sortedPosts.map((post) => (
                        <Link key={post.node._sys.filename} href={`/blog/${post.node._sys.filename}`}>

                        <Card key={post.node.id} className="h-full hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                                <Image
                                    src={post.node.image}
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
                                 <CardContent  className="p-0">{post.node.seo.metaDescription}
                                              </CardContent>
                            </CardHeader>
                        </Card>
                        </Link>
                    ))
                ) : (
                    <p>No posts found.</p>
                )}
            </div>
        </section>
    );
}

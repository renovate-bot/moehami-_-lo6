"use client";

import { Hero } from "@/components/hero";
import { SearchBar } from "@/components/search-bar";
import { USAMap } from "@/components/map/usa-map";
import { FeaturedStores } from "@/components/stores/featured-stores";
import { PopularStates } from "@/components/states/popular-states";
import Postz from "@/components/postz";
import LatestPosts from "@/components/LatestPosts";
import { client } from '@/tina/__generated__/client';
import { useEffect, useState } from "react";

/* Define Post Type */
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

/* Fetching posts data */
async function fetchPosts(): Promise<PostsConnectionEdges> {
    const { data } = await client.queries.postsConnection();
    return (data?.postsConnection?.edges ?? []).filter(edge => edge !== null && edge.node !== null) as PostsConnectionEdges;
}

/* /blog posts */
export default function Home() {
    const [posts, setPosts] = useState<PostsConnectionEdges>([]);

    useEffect(() => {
        fetchPosts().then((data) => setPosts(data));
    }, []);

    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Bin Stores Directory",
        "description": "Find the best bin stores near you with our directory. Get updates, store locations, and deals.",
        "url": "https://lobinstores.com/",
        "publisher": {
            "@type": "Organization",
            "name": "Lo bin Stores",
            "logo": {
                "@type": "ImageObject",
                "url": "https://lobinstores.com/images/logo.png",
                "width": 250,
                "height": 100,
            }
        },
        "mainEntity": {
            "@type": "WebSite",
            "name": "Bin Stores Directory",
            "url": "https://lobinstores.com/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://lobinstores.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
            }
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(jsonLdData);
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <main className="min-h-screen">
            <Hero />
            <div className="container mx-auto px-4 py-8">
                <USAMap />
                <PopularStates />
                <Postz />
                <LatestPosts posts={posts} />
                <FeaturedStores />
            </div>
        </main>
    );
}

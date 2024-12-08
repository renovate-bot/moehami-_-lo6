import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder blog posts - will be replaced with TinaCMS content */}
        {[1, 2, 3].map((post) => (
          <Card key={post}>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Blog functionality will be implemented with TinaCMS and Markdown files.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
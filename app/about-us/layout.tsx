import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
  } from '@/components/ui/breadcrumb';

export default function MaPage({
    
    children,

  }: {
    children: React.ReactNode;
  })  {
  return (
    <>
     <main className='pt-20'>
     <Breadcrumb className='bg-gray-100 p-4 rounded-md'>
        <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <BreadcrumbLink href="/about-us">About Us</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbPage>About Lobinstores </BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
    {children}
      </main>

    </>
  );
}
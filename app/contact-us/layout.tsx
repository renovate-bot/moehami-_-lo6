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
          <BreadcrumbLink href="/contact-us">Contact Us</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbPage> </BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
    {children}
      </main>

    </>
  );
}
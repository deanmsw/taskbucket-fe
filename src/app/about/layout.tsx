import PageContainer from '@/components/PageContainer';

export default function AboutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <PageContainer>{children}</PageContainer>
    </section>
  );
}

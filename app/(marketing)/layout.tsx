export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      Marketing Layout
      {children}
    </section>
  );
}

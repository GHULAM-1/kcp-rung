export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className=" flex justify-center w-full max-w-[1440px] ">
        {children}
      </section>
    </>
  );
}

import NavBar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
      <>
       <NavBar />  
        <section>{children}</section> 
      <Footer />
      </>
  );
}

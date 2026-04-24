import Header from './Header';
import Footer from './Footer';

export default function LayoutShell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

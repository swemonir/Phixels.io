import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactStartups from "@/components/contact/ContactStartups";
import ContactSuccess from "@/components/contact/ContactSuccess"; // Re-import to fix resolution
import AboutFAQ from "@/components/about/AboutFAQ"; // Reusing FAQ as it looks similar

const ContactPage = () => {
  return (
    <>
      <div className="bg-black min-h-screen text-white pt-20">
        <ContactHero />
        <ContactInfo />
        <ContactStartups />
        <ContactSuccess />
        <AboutFAQ />
      </div>
    </>
  );
};

export default ContactPage;

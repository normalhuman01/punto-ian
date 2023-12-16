import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";

export default function Layout({ children }) {
    return (
        <div id="layout">
            <Navbar />
            {children}
            <Footer />
            <a
                href="https://wa.link/ntkshl"
                target="_blank"
                rel="noopener noreferrer"
                className="hvr-pop"
                style={{ position: "fixed", right: 20, bottom: 20, width: 50 }}
                aria-label="Whatsapp"
            >
                <Whatsapp primaryColor="#f5f5f5" secondaryColor="#f8a734" />
            </a>
        </div>
    );
}

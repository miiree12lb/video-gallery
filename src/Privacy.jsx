import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Copy, Check } from "lucide-react";

// Contact email shown on this page. Leave empty to point people to LinkedIn instead.
const CONTACT_EMAIL = "mireia.lopez.bruch@gmail.com";

export default function Privacy() {
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Privacy notice · Video Gallery";
        return () => { document.title = "Video Gallery"; };
    }, []);

    const contact = <>
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    <button type="button" className="copy-email-btn" onClick={copyEmail} aria-label="Copy email address">
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                </>

    return (
        <div className="legal-page">
            <div className="view-all-title">
                <button type="button" className="text-link back-button" onClick={() => navigate("/")} aria-label="Back to the gallery">←</button>
                <h1>Privacy notice</h1>
            </div>

            <p className="legal-updated">Last updated: 13 November 2026</p>

            <h2>Who is responsible</h2>
            <p>
                This is the personal, non-commercial video gallery of Mireia Lopez Bruch, who is responsible
                for the data described below. You can reach me with {contact}.
            </p>

            <h2>What this site does not do</h2>
            <p>
                This site has no accounts, contact forms, comments, cookies, analytics or advertising. It does not
                load fonts, scripts or other content from third-party servers.
            </p>
            <p>
                The only thing it keeps in your browser is whether you chose the light or dark theme, so the site
                looks the same on your next visit. This is saved in your browser's local storage, stays on your
                device and is never sent to me or to anyone else. You can remove it by clearing this site's data
                in your browser.
            </p>

            <h2>What is recorded when you visit</h2>
            <p>
                Like every website, the web server automatically writes technical information to log files when you
                load a page or video: your IP address, the date and time, the file requested, the referring page,
                and your browser and operating system (user agent).
            </p>
            <p>
                This is needed to deliver the site to you and to keep it secure and working (for example, to detect
                abuse or errors). The legal basis is legitimate interest under Article 6(1)(f) of the GDPR. The logs are
                not used to build profiles or to identify visitors, and they are not sold or shared with anyone else.
            </p>

            <h2>Hosting</h2>
            <p>
                The site is hosted by Hostalia, a hosting provider in Spain, which processes the server logs on my
                behalf. The data stays within the European Union. The logs are kept only for the limited period set by
                the hosting provider and are then deleted.
            </p>

            <h2>Links to other sites</h2>
            <p>
                Some videos open on Instagram, and the footer links to Instagram, LinkedIn and Linktree. Nothing is sent
                to these services until you click one of those links. Once you are on their sites, their own privacy
                policies apply.
            </p>

            <h2>Your rights</h2>
            <p>
                Under the GDPR you have the right to access, correct or delete your personal data, to restrict or object
                to its processing, and to data portability. Because the logs are not linked to names, I may only be able
                to find data about you if you give me details that identify your visit (Article 11 GDPR). To use any of
                these rights, contact me as described above.
            </p>
            <p>
                You also have the right to complain to a data protection authority, for example the Dutch{" "}
                <a href="https://www.autoriteitpersoonsgegevens.nl/" target="_blank" rel="noopener noreferrer">Autoriteit Persoonsgegevens</a>{" "}
                or the authority in the country where you live.
            </p>
        </div>
    );
}

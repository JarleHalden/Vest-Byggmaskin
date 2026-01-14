import { Facebook, Instagram } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <Container>
        <div
          className="py-6 small-text text-center"
          style={{ color: "var(--color-text)" }}
        >
          <div className="font-semibold">Vest Bygg & Maskin AS</div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <a
              className="hover:underline"
              href="tel:+4794974498"
            >
              +47 949 74 498
            </a>
            <span aria-hidden="true">·</span>
            <a
              className="hover:underline"
              href="tel:+4745692543"
            >
              +47 456 92 543
            </a>
            <span aria-hidden="true">·</span>
            <a
              className="hover:underline"
              href="mailto:post@vest-byggmaskin.no"
            >
              post@vest-byggmaskin.no
            </a>
            <span aria-hidden="true">·</span>
            <a
              aria-label="Instagram"
              className="inline-flex items-center gap-2 hover:underline"
              href="https://www.instagram.com/vest.byggmaskin.as/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={16} />
              Instagram
            </a>
            <span aria-hidden="true">·</span>
            <a
              aria-label="Facebook"
              className="inline-flex items-center gap-2 hover:underline"
              href="https://www.facebook.com/profile.php?id=61586261128387"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={16} />
              Facebook
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

import Container from "./Container";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E5E7EB",
      }}
    >
      <Container>
        <div
          className="py-6 text-sm"
          style={{
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: 400,
            color: "#0F172A",
          }}
        >
          Footer
        </div>
      </Container>
    </footer>
  );
}

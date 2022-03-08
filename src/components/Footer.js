function Footer() {
  return (
    <footer className="text-center border-top py-4">
      <small className="text-muted">
        Developed by{" "}
        <strong
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://github.com/tahierhussain2205")}
        >
          Tahier Hussain
        </strong>
      </small>
    </footer>
  );
}

export default Footer;

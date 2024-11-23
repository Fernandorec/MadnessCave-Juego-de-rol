function Footer() {
  return (
    <footer className="text-center bg-body-tertiary">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#6e0d83", color: "white" }}
      >
        © 2024 Copyright:{' '}
        <a 
          className="text-white"
          style={{ color: "white" }}
        >
          Eventure.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;

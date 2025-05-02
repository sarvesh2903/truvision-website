const TopNavBar = () => {
  const handleRedirect = () => {
    // Replace with your actual shop's location URL
    window.open("https://maps.app.goo.gl/d7oGnHYtibQQApsU9", "_blank");
  };

  return (
    <div style={styles.navbar as any}>
      <span>Visit our </span>
      <span style={styles.shopLink} onClick={handleRedirect}>
        shop
      </span>
      <span> for 20% discount</span>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#fffae6",
    color: "#333",
    padding: "10px 0",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",

    top: 0,
    width: "100%",
    zIndex: 1000,
    borderBottom: "1px solid #ccc",
  },
  shopLink: {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
    margin: "0 4px",
  },
};

export default TopNavBar;

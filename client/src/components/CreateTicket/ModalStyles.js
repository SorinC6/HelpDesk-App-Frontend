const modalTheme = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 55,
    width: "100%",
    height: "100%",
    bottom: 0
  },
  restrictedContent: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "100%",
    width: "500px",
    maxHeight: "100%",
    height: "200px",
    backgroundColor: theme.color.offWhite,
    boxShadow: theme.shadow.cardShadow,
    border: "none",
    fontFamily: theme.font.fontFamily
  },
  translateContent: {
    position: "absolute",
    top: "35%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    maxWidth: "100%",
    width: "500px",
    maxHeight: "100%",
    height: "300px",
    margin: "1rem",
    backgroundColor: theme.color.offWhite,
    boxShadow: theme.shadow.cardShadow,
    fontFamily: theme.font.fontFamily
  },
  paymentContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
    width: "450px",
    height: "40%",
    backgroundColor: theme.color.offWhite,
    boxShadow: theme.shadow.cardShadow,
    fontFamily: theme.font.fontFamily
  }
};

export default modalTheme;

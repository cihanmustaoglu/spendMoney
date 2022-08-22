import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "calc(100vh-100px)",
  },
  bodyContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "10vh",
    backgroundColor: "#67c46f",
  },
  headerContainer2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "10vh",
    backgroundColor: "red",
  },
  leftContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
    width: "80%",
    border: "1px solid black",
    height: "85vh",
  },
  rightContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    height: "100vh",
    color: "black",
    width: "20%",
    border: "1px solid black",
    overflow: "scroll",
  },
  span: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  productsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },
  productImage: {
    width: "100%",
    objectFit: "cover",
    height: "200px",
  },
  productList: {
    marginTop: 40,
    borderRadius: "20px",
    borderWith: 1,
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #f6f6f6",
    padding: 20,
    backgroundColor: "#f6f6f6",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingTop: "20px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "calc(100vh-100px)",
    padding: "20px",
    overflow: "auto",
  },
  orderHeader: {
    textAlign: "left",
    padding: "20px 0",
    backgroundColor: "#121921",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  },
  wizardHeader: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#fff",
    marginBottom: 0,
    marginLeft: "30px",
    marginRight: "30px",
  },
  orderBody: {
    padding: "30px",
    border: "1px solid #ccc",
    borderTop: 0,
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    boxShadow: "0 2px 2px 0 rgb(9 30 66 / 13%)",
  },
  row: {
    display: "-ms-flexbox",
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
  },
};
    
export default styles;
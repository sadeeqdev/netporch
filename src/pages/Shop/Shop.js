import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import ShopFilterBar from "./ShopFilterBar";
import Watch1 from "../../assets/img/watch_img_21.png";
import Watch2 from "../../assets/img/watch_img_19.png";
import Watch3 from "../../assets/img/watch_img_26.png";
import Rating from "@mui/material/Rating";
import FavButton from "../../components/FavButton/FavButton";

const Shop = () => {
  const ShopBody = styled("div")(({ theme }) => ({
    width: "70%",
    margin: "auto",
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  }));

  const StyledShopContent = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    margin: "120px auto",
  }));

  const StyledFilterBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    backgroundColor: "#fff9eb",
    padding: "20px 0px 50px 0px",
  }));

  const StyledProductsBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
  }));

  const StyledProductsDiv = styled("div")(({ theme }) => ({
    width: "100%",
    height: "310px",
    textAlign: "center",
    borderRadius: "5px",
    boxShadow: "0 0 10px #dfdfdf",
    backgroundColor: "white",
    [theme.breakpoints.up("xl")]: {
      height: "400px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "350px",
    },
    [theme.breakpoints.down("md")]: {
      height: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  }));

  const StyledProductsImage = styled("img")(({ theme }) => ({
    width: "92%",
    height: "auto",
    margin: "13px",
  }));

  const StyledProductsDivHeader = styled("div")(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 500,
    color: "#555",
    marginTop: "0px",
    textAlign: "center",
    width: "100%",
  }));

  const StyledProductsDivText = styled("div")(({ theme }) => ({
    fontSize: "25px",
    fontWeight: 450,
    textAlign: "center",
    color: "#222",
    marginTop: "0px",
  }));

  return (
    <ShopBody>
      <StyledShopContent>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <StyledFilterBar>
              <ShopFilterBar />
            </StyledFilterBar>
          </Grid>
          <Grid item md={9}>
            <StyledProductsBar>
              <Grid container spacing={2}>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch1} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch2} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch1} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch2} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch1} />
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch2} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch1} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch2} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch1} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch2} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch1} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch2} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
                <Grid item md={4} xs={6}>
                  <StyledProductsDiv>
                    <FavButton />
                    <StyledProductsImage src={Watch3} />
                    <StyledProductsDivHeader>
                      Custom Strip Watches
                    </StyledProductsDivHeader>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ margin: "10px auto" }}
                    />
                    <StyledProductsDivText>$249.99</StyledProductsDivText>
                  </StyledProductsDiv>
                </Grid>
              </Grid>
            </StyledProductsBar>
          </Grid>
        </Grid>
      </StyledShopContent>
    </ShopBody>
  );
};

export default Shop;

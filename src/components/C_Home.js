import React from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const StyledTabs = styled(Tabs)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
});

const StyledTab = styled(Tab)({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "none",
    color: "inherit",
  },
});

const C_Home = () => {
  const images = [
    "https://imatrix.com/wp-content/uploads/sites/12/2020/09/shutterstock_1716928600-1024x536.png",
    "https://www.eyefashionoptical.com/img/EFO_2.jpg",
    "https://storage.googleapis.com/website-production/uploads/2023/04/what-is-contextual-advertising.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 40000,
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={NavLink} to="/client">
          <ListItemText primary="Home" />
        </ListItem>
      </List>
  
      {/* Cart Page Links */}
      <List>
        <ListItem button component={NavLink} to="/about/:id">
          <ListItemText primary="Cart" />
        </ListItem>
      </List>
  
      {/* Details Page Links */}
      <List>
        <ListItem button component={NavLink} to="/more">
          <ListItemText primary="Details" />
        </ListItem>
      </List>

      <List>
        <ListItem button component={NavLink} to="/QR">
          <ListItemText primary="Online Search" />
        </ListItem>
      </List>
    </div>
  );
  
  

  return (
    <ThemeProvider theme={theme}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <header>
  <h1>
    <IconButton onClick={toggleDrawer(true)}>
      <MenuIcon />
    </IconButton>
    Welcome to ICARE
  </h1>

  
  <StyledTabs value={false} textColor="inherit">
<StyledTab
              component={NavLink}
              to="/sun"
              label="Sunglasses"
              activeClassName="active-tab"
            />
            <StyledTab
              component={NavLink}
              to="/spectacles"
              label="Spectacles"
              activeClassName="active-tab"
            />
            <StyledTab
              component={NavLink}
              to="/contact"
              label="Contact Lenses"
              activeClassName="active-tab"
            />
            <StyledTab
              component={NavLink}
              to="/gift"
              label="Gift Vouchers"
              activeClassName="active-tab"
            />
            <StyledTab
              component={NavLink}
              to="/accessories"
              label="Accessories"
              activeClassName="active-tab"
            />
            <StyledTab
              component={NavLink}
              to="/sport"
              label="Sports Vision"
              activeClassName="active-tab"
            />
    
  </StyledTabs>
</header>

        <div className="image-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <Card className="image-card">
                  <CardMedia
                    component="img"
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </div>
            ))}
          </Slider>
          <Typography gutterBottom variant="h5" component="div">
            <b>ICARE</b>
          </Typography>
          <CardContent>
            <center>
              <h1>
                <b>Featured</b> Products
              </h1>
            </center>
            <br />
            <Typography variant="body2" color="text.secondary">
                <strong>1. Sunglasses:</strong> Shield your eyes in style with our trendy and protective sunglasses. Whether you're lounging by the pool or hitting the streets, our collection offers UV protection and fashion-forward designs to keep your eyes safe and chic.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <strong>2. Spectacles:</strong> See the world clearly with our range of high-quality spectacles. From classic frames to modern styles, we offer precise prescriptions and durable materials for enhanced vision and everyday comfort.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <strong>3. Contact Lenses:</strong> Experience freedom from glasses with our comfortable and convenient contact lenses. Our selection includes options for daily wear, extended wear, and specialty lenses, ensuring crisp vision and all-day comfort for every lifestyle.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <strong>4. Accessories:</strong> Elevate your eyewear game with our stylish accessories. From sleek cases to lens cleaners, our curated collection complements your eyewear while keeping them safe and pristine.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <strong>5. Sports Vision:</strong> Enhance your athletic performance with our specialized sports vision solutions. Our lenses are tailored to optimize visual clarity, depth perception, and peripheral vision, giving you the competitive edge you need on the field or court.
            </Typography>
          </CardContent>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default C_Home;

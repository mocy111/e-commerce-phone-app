import React,{ useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Typography, Button, Container,Grid} from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem'
// import PaypalButton from '../Paypal/PaypalButton'

const Cart = ({cart,reduction,increase,setCart,removeProduct,getTotal,total}) => {


  const classes = useStyles();

  useEffect(() => {
   getTotal()
  }, [getTotal])



    const EmptyCart = () => (
        <h2 className={classes.padd} variant="subtitle1">You have no items in your shopping cart,
          <Link  to="/">start adding some</Link>!
          <div className={classes.toolbar} />
        </h2>
      );

      const FilledCart = () => (

        <>
        <Grid container spacing={3}>
          {cart.map((param) => (
            <Grid item xs={12} sm={4} key={param.id}>
              <CartItem item={param} reduction={reduction} increase={increase}  removeProduct={removeProduct}  />
            </Grid>
          ))}
        </Grid>
        
        <div className={classes.cardDetails}  >
          <Typography variant="h3" className="total" > <strong>Total:{total} $ </strong> </Typography>
          <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={()=> setCart([]) } >Empty cart</Button>
            
           
            {/* <PaypalButton/> */}
            <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
            <div className={classes.toolbar} />
          </div>
         
        </div>
      </>
        
      );


    return (
       
           
      <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      {!cart.length ? <EmptyCart/> : <FilledCart/> }
    </Container>
           
       
     
       
        
    )
}

export default Cart

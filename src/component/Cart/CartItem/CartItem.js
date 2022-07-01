import React from 'react'

import useStyles from './styles';
import { Typography, Button, Card, CardActions, CardContent } from '@material-ui/core';

const CartItem = ({item,reduction,increase,removeProduct}) => {
    const classes = useStyles();


   const itemTotal= item.price * item.count;
    
    return (
        <Card className="cart-item produc">
          <div className="product__header" >
          <img  src={item.imageUrl} alt={item.name} className={classes.media  } />
          </div>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.title}</Typography>
          <Typography variant="h5"  className="subtotal">{itemTotal} $</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button type="button" size="small" onClick={()=> reduction(item.id)} >-</Button>
            <Typography  >&nbsp;{item.count}&nbsp;</Typography>
            <Button type="button" size="small" 
            onClick={()=> increase(item.id) } >+</Button>
          </div>
          <Button variant="contained" type="button" color="secondary" onClick={()=> removeProduct(item.id) } >Remove</Button>
        </CardActions>


      </Card>
      
    )
}

export default CartItem

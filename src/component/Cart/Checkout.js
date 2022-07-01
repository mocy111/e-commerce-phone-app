import React from 'react';
import PayPal from './PayPal';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const Checkout = ({ total }) => {
  let history = useHistory();
  const classes = useStyles();
  total === 0 && history.push('/');

  return total === 0 ? (
    <CircularProgress />
  ) : (
    <Container maxWidth='sm'>
      <div className={classes.toolbar} />
      <PayPal total={total} />
      <strong>
        NB:L'adresse email pour le paiement est "test@codeloccol.com" et le mot
        de passe est "codeloccol"
      </strong>
      <div className={classes.toolbar} />
    </Container>
  );
};

export default Checkout;

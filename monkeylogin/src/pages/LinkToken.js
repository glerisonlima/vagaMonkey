import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'

// import { Container } from './styles';

export default function LinkToken(props) {

  return (
  <div>
      <Link to={`/cadastrar/${props.location.state.token}`} >link_para_cadatro/{props.location.state.token}</Link>      
      <h6>valido até as {moment(props.location.state.expiration).format('LTS')}</h6>      
  </div>
  );
}

import React, { Fragment, Component } from 'react';
import { Login, Register } from './logged/index';
import AOS from 'aos';
import './Conexion.scss';

class Conexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add('right');
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove('right');
      this.rightSide.classList.add('left');
    } else {
      this.rightSide.classList.remove('left');
      this.rightSide.classList.add('right');
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    AOS.init();
    const { isLogginActive } = this.state;
    const current = isLogginActive ? (
      <h2>
        Click to <br /> Sign Up
      </h2>
    ) : (
      <h2>
        Click to <br /> Log in
      </h2>
    );
    const currentActive = isLogginActive ? 'login' : 'register';
    return (
      <Fragment>
        <div className=' padd' data-aos='fade-up' data-aos-duration='1200'>
          <div className='Appp'>
            <div className='login'>
              <div className='containerr' ref={(ref) => (this.container = ref)}>
                {isLogginActive && (
                  <Login containerRef={(ref) => (this.current = ref)} />
                )}
                {!isLogginActive && (
                  <Register containerRef={(ref) => (this.current = ref)} />
                )}
              </div>
              <RightSide
                current={current}
                currentActive={currentActive}
                containerRef={(ref) => (this.rightSide = ref)}
                onClick={this.changeState.bind(this)}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const RightSide = (props) => {
  return (
    <div
      className='right-side'
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className='inner-container'>
        <div className='text'>{props.current}</div>
      </div>
    </div>
  );
};

export default Conexion;

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import login from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      IsDisable: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateButton);
  }

  handleClickSubmit = () => {
    const { user, history } = this.props;
    const { email } = this.state;
    user(email);
    history.push('/carteira');
  }

  validateButton() {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const SEIS = 6;
    const { email, password } = this.state;
    console.log(emailRegex.test(email));
    if ((emailRegex.test(email)) && password.length >= SEIS) {
      this.setState({
        IsDisable: false,
      });
    } else {
      this.setState({
        IsDisable: true,
      });
    }
  }

  render() {
    const { IsDisable } = this.state;
    return (
      <div className="Login">
        <input
          name="email"
          type="email"
          data-testid="email-input"
          placeholder="Digite seu email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          onChange={ this.handleChange }
          data-testid="password-input"
          placeholder="Digite sua senha"
        />
        <button
          type="submit"
          onClick={ this.handleClickSubmit }
          disabled={ IsDisable }
        >
          Entrar
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  user: (e) => dispatch(login(e)),
});

Login.propTypes = {
  user: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

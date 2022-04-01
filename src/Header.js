import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getApi } from './actions/api';

class Header extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { email, currencies } = this.props;
    console.log(currencies);
    return (
      <div>
        <h2 data-testid="email-field">
          { email }
        </h2>
        <h3 data-testid="total-field">
          0
        </h3>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
//   expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getApi()),
});
Header.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

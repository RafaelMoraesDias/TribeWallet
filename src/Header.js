import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './header.css';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    let soma = 0;
    if (expenses.length !== 0) {
      console.log(expenses);
      const expensesValue = expenses.map((elem) => {
        const { value, currency, exchangeRates } = elem;
        // console.log(currency);
        // console.log(exchangeRates[currency]);
        const convertedValue = exchangeRates[currency].ask;
        // console.log(convertedValue);
        const FinalValue = +value * convertedValue;
        return FinalValue;
      });
      soma = expensesValue.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    }

    return (
      <div className="titulo">
        <h1>TribeWallet</h1>

        <div>
          <h2 data-testid="email-field">
            { email }
          </h2>
          <h3 data-testid="total-field">
            { soma }
          </h3>
          <h3 data-testid="header-currency-field">
            BRL
          </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};
export default connect(mapStateToProps)(Header);

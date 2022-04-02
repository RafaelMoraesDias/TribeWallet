import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';

class Wallet extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <section>
          <label htmlFor="value" data-testid="value-input">
            Valor da Despeza
            <input type="text" />

          </label>
          <label htmlFor="description" data-testid="description-input">
            Descrição da Despeza
            <input type="text" />

          </label>
          <label htmlFor="currency" data-testid="currency-input">
            Moeda
            <select id="currency">
              {currencies.map((el, index) => (
                <option key={ index } value={ el }>
                  {el}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="payment" data-testid="method-input">
            <select>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category" data-testid="tag-input">
            <select>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </section>
        <section id="table">
          <table>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th> Editar/Excluir</th>
            </tr>
          </table>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  currencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);

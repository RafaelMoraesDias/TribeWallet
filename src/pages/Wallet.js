import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getApi, getExchange } from '../actions/api';
import Header from '../Header';
import '../table.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

    handleClickSubmit = (event) => {
      event.preventDefault();
      const { addNewExpenses, expenses } = this.props;
      // getCurrencies();
      addNewExpenses({ id: expenses.length, ...this.state });
      this.setState({
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Lazer',
      });
    }

    render() {
      const { currencies } = this.props;
      const { value, description, currency, method, tag } = this.state;
      // console.log(expenses);
      return (
        <div>
          <Header />
          <form onSubmit={ this.handleClickSubmit }>
            <label htmlFor="value">
              Valor da Despesa
              <input
                id="value"
                type="number"
                data-testid="value-input"
                name="value"
                value={ value }
                onChange={ this.handleChange }
              />

            </label>
            <label
              htmlFor="description"
            >
              Descrição da Despesa
              <input
                id="description"
                value={ description }
                type="text"
                name="description"
                data-testid="description-input"
                onChange={ this.handleChange }
              />

            </label>
            <label htmlFor="currency">
              Moeda
              <select
                data-testid="currency-input"
                id="currency"
                value={ currency }
                name="currency"
                onChange={ this.handleChange }
              >
                {currencies.map((el, index) => (
                  <option key={ index } value={ el }>
                    {el}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="payment">
              <select
                id="payment"
                name="method"
                data-testid="method-input"
                value={ method }
                onChange={ this.handleChange }
              >
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão de crédito">Cartão de crédito</option>
                <option value="Cartão de débito">Cartão de débito</option>
              </select>
            </label>
            <label htmlFor="category">
              <select
                id="category"
                name="tag"
                data-testid="tag-input"
                value={ tag }
                onChange={ this.handleChange }
              >
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Trabalho"> Trabalho</option>
                <option value="Transporte">Transporte</option>
                <option value="Saúde">Saúde</option>
              </select>
            </label>
            <button
              type="submit"
            >
              Adicionar Despesa

            </button>
          </form>

          <table>
            <tbody>
              <tr className="tabela">
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
              {/* {expenses.map((el) => {
                const { name, ask } = Object.values(el.exchangeRates)
                  .find((elem) => elem.code === el.currency);
                return (
                  <tr key={ el.id }>
                    <td>{ el.description }</td>
                    <td>{ el.tag }</td>
                    <td>{ el.method }</td>
                    <td>{ ((+el.value).toFixed(2)) }</td>
                    <td>{ name }</td>
                    <td>{ +ask.toFixed(2) }</td>
                    )
                  </tr>
                );
              }}) */}
            </tbody>
          </table>

        </div>
      );
    }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.exchangeRates,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addNewExpenses: (value) => dispatch(getExchange(value)),
  getCurrencies: () => dispatch(getApi()),
});

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  expenses: PropTypes.objectOf(PropTypes.object).isRequired,
  addNewExpenses: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

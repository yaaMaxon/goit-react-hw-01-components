import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({items}) => {
    return (
<table className={css.transactionHistory}>
  <thead className={css.transactionHead}>
    <tr className={css.transactionHeadList}>
      <th className={css.HeadType}>Type</th>
      <th className={css.HeadAmount}>Amount</th>
      <th className={css.HeadCurrency}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.transactionBody}>
    {items.map(({id, type, amount, currency}) => {
        return(
    <tr key={id} className={css.transactionBodyList}>
      <td className={css.type}>{type}</td>
      <td className={css.amount}>{amount}</td>
      <td className={css.currency}>{currency}</td>
    </tr>)
    })}
  </tbody>
</table>);
}
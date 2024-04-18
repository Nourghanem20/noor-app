import classes from './ResultTable.module.css'
const ResultTable=(props)=>{
  const formatter=new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',
    minimumFractionDigits:2,
    maximumFractionDigits:2
  });
    return(
        <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData)=>(
          <tr key={formatter.format(yearData.year)}>
            <td>{formatter.format(yearData.year)}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>{yearData.savingsEndOfYear-
            props.initialInvestment-
            yearData.yearlyContribution*yearData.year}</td>
            <td>{props.initialInvestment-
            yearData.yearlyContribution*yearData.year}</td>
          </tr>))}
         
        </tbody>
      </table>
    );
}
export default ResultTable;
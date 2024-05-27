function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currYear = getCurrentYear();
  const budget = {
    [`income-${currYear}`]: income,
    [`gdp-${currYear}`]: gdp,
    [`capita-${currYear}`]: capita,
  };

  return budget;
}

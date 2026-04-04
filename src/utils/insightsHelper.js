export const getHighestSpendingCategory = (transactions) => {
  const expenseMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      expenseMap[t.category] =
        (expenseMap[t.category] || 0) + t.amount;
    }
  });

  let maxCategory = "";
  let maxAmount = 0;

  for (let category in expenseMap) {
    if (expenseMap[category] > maxAmount) {
      maxAmount = expenseMap[category];
      maxCategory = category;
    }
  }

  return { category: maxCategory, amount: maxAmount };
};

export const getMonthlyComparison = (transactions) => {
  const monthly = {};

  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
    });

    if (!monthly[month]) {
      monthly[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthly[month].income += t.amount;
    } else {
      monthly[month].expense += t.amount;
    }
  });

  return monthly;
};

export const getInsights = (transactions) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  if (expense > income) {
    return "⚠️ You are spending more than your income.";
  } else {
    return "✅ Your finances are in a healthy state.";
  }
};
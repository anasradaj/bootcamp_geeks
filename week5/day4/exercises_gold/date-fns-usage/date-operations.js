// date-operations.js
const { format, addDays } = require('date-fns');

function showDatePlusFiveDays() {
  const now = new Date();
  const future = addDays(now, 5);
  const formatted = format(future, 'yyyy-MM-dd HH:mm:ss');
  console.log('Date plus 5 days:', formatted);
}

module.exports = { showDatePlusFiveDays };

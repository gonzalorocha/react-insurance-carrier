export function getYearDif(year) {
  return new Date().getFullYear() - year
}

export function getIncrementByCompany(company) {
  let increment;
  switch (company) {
    case 'American':
      increment = 1.3;
      break;
    case 'European':
      increment = 1.3;
      break;
    case 'Asian':
      increment = 1.3;
      break;

    default:
      break;
  }
  return increment;
}

export function getPlan(plan) {
  return plan === 'basic' ? 1.2 : 1.5;
}

export function firstWordUpper(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
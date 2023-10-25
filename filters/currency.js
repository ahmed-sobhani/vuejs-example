function currency(value) {
  return value == undefined
    ? ""
    : parseFloat(value)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default currency;

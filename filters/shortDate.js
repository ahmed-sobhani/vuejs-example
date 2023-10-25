import moment from "moment";

function shortDate(value) {
  return value ? moment(String(value)).format("D MMMM YYYY") : "";
}

export default shortDate;

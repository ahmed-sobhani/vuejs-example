function fileName(value) {
  return value == undefined
    ? ""
    : value
        .split("/")
        .pop()
        .split(".")[0];
}

export default fileName;

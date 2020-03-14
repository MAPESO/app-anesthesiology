function checkLogClassification(userList) {
  let isCheck = false;
  for (const item of userList) {
    if (item.value === true) {
      isCheck = true;
    }
  }
  return isCheck;
}

export { checkLogClassification };

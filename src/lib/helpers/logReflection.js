function checkLogReflection(userList) {
  const check = [
    'radioGroup',
    'radioGroup2',
    'contributingFactor',
    'learnedLessons'
  ];
  return userList.some(user => {
    return check.some(prop => !(user[prop] === ''));
  });
}

export { checkLogReflection };

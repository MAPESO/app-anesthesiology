function checkLogDescription(userList) {
  const check = [
    'patientSelect',
    'ageSelect',
    'imcSelect',
    'asaSelect',
    'locationSelect',
    'timeSelect',
    'assistantSelect',
    'supevisorSelect',
    'otherSelect',
    'problemSelect',
    'descriptionProblem'
  ];
  return userList.some(user => {
    return check.some(prop => !(user[prop] === ''));
  });
}

export { checkLogDescription };

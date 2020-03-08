function checKFather(userList) {
  let isCheck = false;
  for (const user of userList) {
    user.data.map(item => {
      if (item.value !== false) {
        isCheck = true;
      }
    });
    return { isShow: isCheck, title: user.title };
  }
}

export { checKFather };

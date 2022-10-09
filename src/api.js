import data from './data/users.json' assert { type: "json"};

export const findUserList = (text) => {
  if (text.length === 1) {
    return data;
  }

  const keyword = text.slice(1);
  const uKeyword = keyword.toUpperCase();

  if (text[0] === '@') {
    return data.filter(user => user.username.toUpperCase().includes(uKeyword)
      || (user.personalInfo.firstName && user.personalInfo.firstName.toUpperCase().includes(uKeyword))
      || (user.personalInfo.lastName && user.personalInfo.lastName.toUpperCase().includes(uKeyword)));
  }

  if (text[0] === '#') {
    return data.filter(user => user.tags.includes(tag => tag.toUpperCase().includes(keyword)));
  }
};

// todo: remove this
export const blah = '';

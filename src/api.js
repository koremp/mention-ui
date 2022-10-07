import data from './data/users.json' assert { type: "json"};

export const findUserList = ({ nameText, prefixType }) => {
  if (prefixType === '@') {
    return data;
  }
  else if (prefixType === '#') {
    return data;
  } else {
    throw new Error('findUserList Error on wrong prefixType!');
  }
};

// todo: remove this
export const blah = '';

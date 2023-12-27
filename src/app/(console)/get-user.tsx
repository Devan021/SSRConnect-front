import jwt from 'jsonwebtoken';

export const getUser = (c: string) => {
  if(!c) return null;
  try {
    const decoded: any = jwt.decode(c);
    if(!decoded) return null;
    return {
      id: decoded?.user_id,
      name: decoded?.user_name,
      email: decoded?.user_email,
      type: decoded?.user_type,
    };
  } catch (e) {
    return null;
  }
};

export default getUser;
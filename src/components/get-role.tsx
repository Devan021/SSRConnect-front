import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export const getRole = () => {

  const userCookie = cookies().get('REFRESH_TOKEN')?.value;

  if(!userCookie) throw new Error('Please login again to continue');
  try {
    const decoded: any = jwt.decode(userCookie);
    if(!decoded) return null;
    return decoded?.user_type;
  } catch (e) {
    return null;
  }
};

export default getRole;
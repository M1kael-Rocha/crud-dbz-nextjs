import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function createSession(userId, userName, userMail) {
  const keySecret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
  const alg = 'HS256';

  const session = await new SignJWT({ userId, userName, userMail })
    .setProtectedHeader({ alg })
    .setExpirationTime('2h')
    .sign(keySecret);

  const cookieStore = await cookies();
  cookieStore.set('session', session, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 120,
  });
}

async function verifyToken(sessionValue) {
  const keySecret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
  const alg = 'HS256';

  try {
    const { payload } = await jwtVerify(sessionValue, keySecret, {
      algorithms: [alg],
    });
    return payload;
  } catch (error) {
    console.log('Erro session token', error);
    redirect('/login');
  }
}

export async function validateSession() {
  const sessionCookie = (await cookies()).get('session');

  if (sessionCookie) {
    const { value } = sessionCookie;
    const payload = await verifyToken(value);
    return payload;
  }

  return false;
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

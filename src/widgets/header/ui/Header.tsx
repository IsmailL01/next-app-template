import { auth } from '@clerk/nextjs/server';
import { SignUpButton, UserButton, SignInButton } from '@clerk/nextjs';

import cls from './Header.module.css';

export const Header = () => {
  const { userId } = auth();

  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.headerWrapper}>
          <div className={cls.logo}>LOGOs</div>
          <div>
            {userId ? (
              <UserButton />
            ) : (
              <div className={cls.authBtns}>
                <SignUpButton mode="modal">
                  <button type="button">Зарегистрироваться</button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button type="button">Войти</button>
                </SignInButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

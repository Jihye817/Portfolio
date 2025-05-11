import { ComponentPropsWithRef, ReactNode } from 'react';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  className?: string;
}

function NormalButton({ children, className = '', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${className} cursor-pointer rounded-[1rem] bg-blue-500 px-[1rem] py-[0.5rem]`}
    >
      {children}
    </button>
  );
}

export default NormalButton;

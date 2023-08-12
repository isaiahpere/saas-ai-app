import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
}
const AuthLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
};

export default AuthLayout;

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="flex min-h-screen w-full flex-col">{children}</div>;
};

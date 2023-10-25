
type SubTitleProps = {
  children: string | JSX.Element
}

export const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <h3 className="font-medium text-base">{children}</h3>
  );
}

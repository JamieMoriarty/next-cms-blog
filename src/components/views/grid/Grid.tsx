import { HtmlHTMLAttributes, ReactNode } from "react";

import css from "./Grid.module.scss";

interface GridProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Grid({ children, ...rest }: GridProps) {
  return (
    <div {...rest} className={css.container}>
      {children}
    </div>
  );
}

function GridColumn({ children, ...rest }: GridProps) {
  return (
    <div {...rest} className={css.column}>
      {children}
    </div>
  );
}
export default Object.assign(Grid, { Column: GridColumn });

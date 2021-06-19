import React, {FunctionComponent, ReactNode} from 'react';
import styles from './Grid.module.scss';
import cn from 'classnames';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';
type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";
type AlignItem = "flex-start" | "center" | "flex-end";

interface IProps {
    children: ReactNode,
    container?: boolean;
    item?: boolean;
    xs?: Cols;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
    spacing?: Spacing;
    justifyContent?: JustifyContent;
    alignItem?: AlignItem;
}

const Grid:FunctionComponent<IProps> = ({...args}) => {
    const classNames = cn({
        [styles.Grid_container]: args.container,
        [styles.Grid_item]: args.item,
        [styles[`Grid_xs_${args.xs}`]]: args.xs,
        [styles[`Grid_sm_${args.sm}`]]: args.sm,
        [styles[`Grid_md_${args.md}`]]: args.md,
        [styles[`Grid_lg_${args.lg}`]]: args.lg,
        [styles[`Grid_spacing_${args.spacing}`]]: args.spacing,
        [styles[`Grid_justifyContent_${args.justifyContent}`]]: args.justifyContent,
        [styles[`Grid_alignItem_${args.alignItem}`]]: args.alignItem,
    });
    return (
        <div className={classNames}>
            {args.children}
        </div>
    )
}

export default Grid;

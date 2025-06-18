import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border  h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-yellow-400 text-neutral-950 border-yellow-400",
            secondary: "border-white text-white bg-transparent inline-flex items-center",
        },
        size: { 
            sm: "h-10",
        }
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
        iconAfter?: React.ReactNode;
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, iconAfter, children, ...otherProps } = props;
    return (
        <button
            className={classes({
                variant,
                size,
                className,
            })}
            {...otherProps}
        > 
        {children}
        {iconAfter && <span className="ml-2">{iconAfter}</span>}
        </button>
        
    );
}

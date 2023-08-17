interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    text: string;
}

const CustomLabel: React.FunctionComponent<LabelProps> = ({
    text,
    ...rest
}) => {
    return (
        <label className='color-667085 text-xs ml-3' {...rest}>
            {text}
        </label>
    );
};

export default CustomLabel;

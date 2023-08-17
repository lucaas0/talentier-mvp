interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    value: string;
    type: React.HTMLInputTypeAttribute;
    hasError: boolean;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FunctionComponent<InputProps> = ({
    type,
    placeholder,
    value,
    hasError,
    onInputChange,
    ...rest
}) => {
    return (
        <input
            type={type}
            className={`color-667085 text-sm w-full bg-F2F4F7 rounded-lg p-3 outline-none ${
                hasError ? 'input-error' : ''
            }`}
            placeholder={placeholder}
            value={value}
            {...rest}
            onChange={(e) => onInputChange(e)}
        />
    );
};

export default CustomInput;

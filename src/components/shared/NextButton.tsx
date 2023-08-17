interface NextButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    disabled: boolean;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const NextButton = ({ text, disabled, callback }: NextButtonProps) => {
    return (
        <button
            className={`w-full p-3 my-12 rounded-full bg-101828 text-sm text-white ${
                disabled ? 'opacity-50' : 'opacity-100'
            }`}
            onClick={(e) => callback(e)}
        >
            {text}
        </button>
    );
};

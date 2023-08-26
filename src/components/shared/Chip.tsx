interface ChipButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    selected: boolean;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ChipButton = ({ text, selected, callback }: ChipButtonProps) => {
    return (
        <button
            className={`chip-button ${selected ? 'chip-button--selected' : ''}`}
            onClick={(e) => callback(e)}
        >
            {text}
        </button>
    );
};

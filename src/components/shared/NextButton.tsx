interface CustomButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    disabled: boolean;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CustomButton = ({
    text,
    disabled,
    callback,
}: CustomButtonProps) => {
    return (
        <section className='flex-1 flex items-end w-full'>
            <button
                className={`w-full p-3 my-12 rounded-full bg-101828 text-sm text-white ${
                    disabled ? 'opacity-50' : 'opacity-100'
                }`}
                onClick={disabled ? undefined : (e) => callback(e)}
            >
                {text}
            </button>
        </section>
    );
};

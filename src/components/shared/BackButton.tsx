const BackButtonFn = ({ callback }: { callback: () => void }) => {
    return (
        <button className='button-back my-4' onClick={callback}>
            <svg
                width='9'
                height='14'
                viewBox='0 0 9 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M7.5 13.25L1.25 7L7.5 0.75'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </button>
    );
};

export const BackBtn = BackButtonFn;

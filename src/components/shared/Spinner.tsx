import '../../assets/styles/spinner.css';
const Spinner = () => {
    return (
        <>
            <div className='overlay max-w-md' />
            <div className='lds-roller'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default Spinner;

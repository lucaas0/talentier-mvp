import { BackBtn } from './BackButton';

interface FormHeaderProps {
    onStepBack: () => void;
}
const CreateFormHeader = ({ onStepBack }: FormHeaderProps) => {
    return (
        <section className='flex items-center w-full'>
            <BackBtn callback={onStepBack} />
            <h1 className='text-center flex-1 mr-8'>
                <span className='text-2xl font-black color-222'>talen</span>
                <span className='text-2xl font-black color-7B61FF'>tier</span>
            </h1>
        </section>
    );
};

export default CreateFormHeader;

import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex  justify-around p-4 max-w-7xl mx-auto items-center border-b-4'>
            <h1 className='text-4xl font-bold'>
                Digital Academy
            </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;
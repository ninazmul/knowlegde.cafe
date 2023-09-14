import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
      <header className="flex justify-between items-center border-b-4 p-2 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center  text-purple-600">
          Knowledge Cafe
        </h1>
        <img src={profile} alt="" />
      </header>
    );
};

export default Header;
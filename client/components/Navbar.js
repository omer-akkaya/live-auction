import { useAuthContext } from "@/hooks/useAuthContext";
import { useLogout } from "@/hooks/useLogout";
import Link from "next/link";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className='w-full bg-black flex h-16 justify-between items-center px-16'>
      <Link className='text-white text-2xl' href={"/"}>
        Auction
      </Link>

      <div className='flex'>
        {!user && (
          <div>
            <Link className='text-white text-xl' href={"/signup"}>
              Signup
            </Link>
            <Link className='text-white ml-10 text-xl' href={"/login"}>
              Login
            </Link>
          </div>
        )}
        {user && (
          <div>
            <span className='text-white'>{user.email}</span>
            <button className='text-white ml-10 text-xl' onClick={handleClick}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

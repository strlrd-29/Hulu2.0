import Image from "next/image";

//relative imports
import HeaderItem from "./HeaderItem";

//icons imports
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightBulbIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col justify-between sm:flex-row m-3">
      <div className="flex items-center flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightBulbIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collections" Icon={CollectionIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width="200px"
        height="100px"
        className="object-contain"
      />
    </header>
  );
}

export default Header;

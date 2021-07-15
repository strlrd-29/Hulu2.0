function HeaderItem({ title, Icon }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20">
      <Icon className="h-8 mb-1 group-hover:scale-110" />
      <p className="tracking-widest group-hover:opacity-100 opacity-0 hover:text-white transition duration-300 ease-in">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;

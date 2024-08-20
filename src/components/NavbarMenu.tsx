import { useEffect, useState } from "preact/compat";
import { webLinks } from "../../utils/links";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currPath, setCurrPath] = useState<string>("");

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setCurrPath(window.location.pathname);
  });

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        class={`px-6 py-2 font-bold rounded-xl border border-white ${
          isOpen && "bg-white text-bpsDarkBlue"
        }`}
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div
        class={`flex gap-4 justify-center items-center max-sm:hidden ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        {webLinks.map((link) => {
          return (
            <a
              href={link.href}
              class={`font-bold text-white hover:text-white/60 hover:scale-95 last:bg-white last:text-bpsDarkBlue last:p-2 last:rounded-xl last:hover:bg-white/60 last:hover:text-bpsDarkBlue ${
                currPath === link.href &&
                "text-white/60 scale-95 last:bg-white/60 last:text-bpsDarkBlue"
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      <div
        class={`flex absolute left-0 top-16 z-10 flex-col gap-4 py-4 w-full text-center bg-bpsDarkBlue ${
          !isOpen && "hidden"
        }`}
      >
        {webLinks.map((link) => {
          return (
            <a
              href={link.href}
              class={`font-bold text-white hover:text-white/60 hover:scale-95 last:bg-white last:text-bpsDarkBlue last:p-2 last:rounded-xl last:hover:bg-white/60 last:hover:text-bpsDarkBlue ${
                currPath === link.href &&
                "text-white/60 scale-95 last:bg-white/60 last:text-bpsDarkBlue"
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default NavbarMenu;

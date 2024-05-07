"use client";

import { S } from "./style";
import { IoIosMenu } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { useLocalStorage } from "usehooks-ts";
import { defaultTheme } from "@/themes/defaultTheme";
import { darkTheme } from "@/themes/darkTheme";

const Navbar = () => {
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  const handleThemeChange = () => {
    if (theme.bodyColor === "#dedad7") {
      setTheme(darkTheme);
    } else if (theme.bodyColor === "#121212") {
      setTheme(defaultTheme);
    } else {
      setTheme(defaultTheme);
    }
  };

  return (
    <S.Container>
      <S.Logo></S.Logo>
      {/* <S.Menu>
        <IoIosMenu className="IoIosMenu" />
      </S.Menu> */}
      <S.MenuWrapper>
        <S.Language>
          <span>中文</span>
          <span>|</span>
          <span>英文</span>
        </S.Language>
        <S.DarkModeButton onClick={() => handleThemeChange()}>
          <BsMoonStarsFill className="BsMoonStarsFill" />
        </S.DarkModeButton>
      </S.MenuWrapper>
    </S.Container>
  );
};

export default Navbar;

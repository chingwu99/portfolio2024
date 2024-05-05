"use client";

import { S } from "./style";
import { IoIosMenu } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
const Navbar = () => {
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
        <S.DarkModeButton>
          <BsMoonStarsFill className="BsMoonStarsFill" />
        </S.DarkModeButton>
      </S.MenuWrapper>
    </S.Container>
  );
};

export default Navbar;

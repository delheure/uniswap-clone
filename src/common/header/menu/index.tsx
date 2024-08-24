import React, { useState } from "react";
import Link from "next/link";
import {
  NavMenuItem,
  NavMenuText,
  NavMenuWrapper,
  SubMenuItem,
  SubMenuWrapper,
} from "~/common/header/menu/style";
import { useRouter } from "next/router";

interface MenuItemProps {
  name: string;
  url: string;
  subMenu?: { name: string; url: string }[];
}

const Menu = () => {
  const { pathname } = useRouter();
  const [isHoverMenu, setIsHoverMenu] = useState<string | null>(null);

  // 메뉴 리스트
  const menuRouteList: MenuItemProps[] = [
    {
      name: "Trade",
      url: "/",
      subMenu: [
        { name: "", url: "" },
        { name: "", url: "" },
      ],
    },
    {
      name: "Explore",
      url: "/explore",
      subMenu: [
        { name: "", url: "" },
        { name: "", url: "" },
      ],
    },
    {
      name: "Pool",
      url: "/pool",
      subMenu: [
        { name: "", url: "" },
        { name: "", url: "" },
      ],
    },
  ];

  // hover시, 하위 메뉴 노출
  const handleMouseEnter = (menuName: string) => {
    setIsHoverMenu(menuName);
  };

  const handleMouseLeave = () => {
    setIsHoverMenu(null);
  };

  const renderSubMenu = (subMenu: { name: string; url: string }[]) => {
    return subMenu.map(({ url, name }) => (
      <SubMenuItem key={url}>
        <Link href={url}>
          <NavMenuText active={pathname === url}>{name}</NavMenuText>
        </Link>
      </SubMenuItem>
    ));
  };

  const renderRouteList = () => {
    return menuRouteList.map(({ url, name, subMenu }) => (
      <NavMenuItem
        key={url}
        onMouseEnter={() => handleMouseEnter(name)}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={url}>
          <NavMenuText active={pathname === url}>{name}</NavMenuText>
        </Link>
        {subMenu && isHoverMenu === name && (
          <SubMenuWrapper>{renderSubMenu(subMenu)}</SubMenuWrapper>
        )}
      </NavMenuItem>
    ));
  };

  return <NavMenuWrapper>{renderRouteList()}</NavMenuWrapper>;
};

export default Menu;

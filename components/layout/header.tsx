import { Drawer, Menu, MenuProps } from "antd";
import { useState } from "react";
import { CHILD_MENU_GP, CHILD_MENU_SP, MENU } from "../../lib/constants";
import { ICON_CLOSE, ICON_DOWN, ICON_MENU } from "../../lib/svgs";
import Container from "../container";

type Props = {
  preview?: boolean;
  headerContent?: React.ReactNode;
  className?: string;
};

type MenuItem = Required<MenuProps>["items"][number];

const Header = ({ headerContent, preview, className = "" }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ) => {
    return { key, icon, children, label, type } as MenuItem;
  };

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (MENU.map((e) => e.key).indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const items: MenuItem[] = MENU.map((e) =>
    getItem(
      e.title,
      e.key,
      undefined,
      e.haveSubMenu
        ? e.child.map((c) =>
            getItem(
              <span className="font-semibold">{c.title}</span>,
              `${c.route}?title=${c.title}`,
              <img src={c.icon} className="pr-1.5" />
            )
          )
        : undefined
    )
  );

  const toggleSubMenu = (key: string) => {
    if (openKeys.includes(key)) setOpenKeys((pre) => pre.filter((item) => item !== key));
    else setOpenKeys([key]);
  };

  const clickLogin = () => {
    if (typeof window !== "undefined") {
      (window as any).AirflexJS.logEvent("web_demo_click_login");
    }
  };

  const clickRegister = () => {
    (window as any).AirflexJS.logEvent("web_demo_click_register");
  };

  const clickIcon = () => {
    (window as any).AirflexJS.logEvent("web_demo_click_fav_icon");
  };

  return (
    <>
      <div className={`header-banner xs:h-[57rem] md:h-[43rem] ${className}`}>
        <Container>
          <div className="py-4">
            <nav className=" border-gray-200">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-2 md:p-4">
                <a href="/" className="flex items-center">
                  <img src="/images/airflex_favicon.png" alt="logo" onClick={clickIcon}></img>
                </a>

                <div className="flex md:order-2 items-center">
                  <a
                    href="https://portal.airflex.io/login"
                    target="_blank"
                    onClick={clickLogin}
                    className="text-white font-medium rounded-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 hidden md:block"
                  >
                    Đăng nhập
                  </a>
                  <a
                    href="/lien-he"
                    className="header-btn-download text-white font-medium px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 hidden md:flex items-center"
                    onClick={clickRegister}
                  >
                    <span className="flex items-center justify-center w-full">Đăng ký</span>
                  </a>
                  <button
                    // data-collapse-toggle="mega-menu-full"
                    type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-full md:hidden focus:outline-none focus:ring-1 focus:ring-gray-200"
                    aria-controls="mega-menu-full"
                    aria-expanded={false}
                    onClick={() => setOpenMenu(true)}
                  >
                    {ICON_MENU}
                  </button>
                </div>

                <div
                  // id="mega-menu-full"
                  className="peer items-center justify-between text-base font-medium hidden w-full md:flex md:w-auto md:order-1"
                >
                  <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    {MENU.map((e) => {
                      if (e.haveSubMenu) {
                        return (
                          <li key={e.key}>
                            <button
                              id="mega-menu-full-dropdown-button"
                              // data-collapse-toggle={`mega-menu-full-dropdown-${e.key}`}
                              className="group flex items-center justify-between w-full py-2 pl-3 pr-4 rounded md:w-auto  md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 text-white"
                              style={{ color: openKeys.includes(e.key) ? "#ffa800" : undefined }}
                              onClick={() => toggleSubMenu(e.key)}
                            >
                              {e.title}
                              <span
                                className="w-5 h-5 ml-1 transition-transform !duration-500"
                                style={{ transform: openKeys.includes(e.key) ? "rotate(-180deg)" : "rotate(0deg)" }}
                              >
                                {ICON_DOWN}
                              </span>
                            </button>
                          </li>
                        );
                      } else {
                        return (
                          <li key={e.key}>
                            <a
                              href={e.route}
                              className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white"
                              onClick={() => {
                                (window as any).AirflexJS.logEvent("web_demo_click_menu", {
                                  menu: e.route,
                                });
                              }}
                            >
                              {e.title}
                            </a>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>

              <div
                // id="mega-menu-full-dropdown-sp"
                className="peer-disabled:!hidden absolute left-5 right-5 z-10 hidden mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y"
                style={{
                  display:
                    openKeys.includes("sp") && typeof window !== "undefined" && window.innerWidth >= 768
                      ? "block"
                      : "none",
                }}
              >
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-3 md:px-6">
                  {CHILD_MENU_SP.map((e) => {
                    return (
                      <a key={e.title} href={e.route} className="p-3 rounded-lg hover:bg-gray-100 flex items-start">
                        <img src={e.icon} className="px-4" />
                        <div>
                          <div className="font-semibold">{e.title}</div>
                          <span className="text-sm text-gray-500">{e.content}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div
                // id="mega-menu-full-dropdown-gp"
                className="peer/pg hidden absolute left-5 right-5 z-10 mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y"
                style={{
                  display:
                    openKeys.includes("gp") && typeof window !== "undefined" && window.innerWidth >= 768
                      ? "block"
                      : "none",
                }}
              >
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-4 md:px-6">
                  {CHILD_MENU_GP.map((e) => {
                    return (
                      <a key={e.title} href={e.route} className="p-3 rounded-lg hover:bg-gray-100 flex items-center">
                        <img className="p-4" src={e.icon}></img>
                        <div className="md:w-screen xs:w-1/2">{e.title}</div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>

          {headerContent}
        </Container>
      </div>
      <Drawer
        width={typeof window !== "undefined" && window.innerWidth > 390 ? 390 : "100%"}
        title=""
        placement="right"
        onClose={() => setOpenMenu(false)}
        open={openMenu}
        closeIcon={<></>}
        headerStyle={{ border: 0, padding: "24px 16px 0" }}
        extra={
          <span className="cursor-pointer" onClick={() => setOpenMenu(false)}>
            {ICON_CLOSE}
          </span>
        }
        bodyStyle={{ padding: "16px 0px" }}
        footer={
          <div className="flex justify-between">
            <button className="text-main rounded-[5555px] border border-solid border-main text-base font-semibold px-6 py-3 hover:bg-main hover:text-white">
              <a href="https://portal.airflex.io/login" target="_blank" onClick={clickLogin}>
                Đăng nhập
              </a>
            </button>
            <button className="home-header-button-try">
              <a href="/lien-he">Dùng thử ngay</a>
            </button>
          </div>
        }
        footerStyle={{ border: 0, padding: "16px 16px 24px" }}
      >
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items}
          className="!border-0"
          style={{ padding: 0 }}
          onSelect={({ key }) => {
            const route = key.split("?title=")[0];
            if (route) window.location.href = route;
          }}
        ></Menu>
      </Drawer>
    </>
  );
};

export default Header;

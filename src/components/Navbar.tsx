"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { GitHub, Check } from "@mui/icons-material";

export default function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const links = [
    {
      name: "Github",
      icon: <GitHub />,
      href: "https://github.com/luisFelipeEvilla/rick-and-morty-web"
    },
    {
      name: "Oficial API",
      icon: <Check />,
      href: "https://rickandmortyapi.com/"
    }
  ]
  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>

          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">Rick And Morty</p>
        </NavbarBrand>

      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map((link, index) => (
            <NavbarLink key={index} {...link} />
          ))
        }

      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {
          links.map((link, index) => (
            <NavbarLink key={index} {...link} />
          ))
        }
      </NavbarMenu>
    </Navbar>
  );
}

function NavbarLink(props: { name: string; icon: React.ReactNode; href: string }) {
  return (
    <NavbarItem className="hover:scale-105">
      <Link className="flex gap-2 items-center" color="foreground" href={props.href} target="_blank">
        {props.icon}

        <p>{props.name}</p>
      </Link>
    </NavbarItem>
  )
}

function NavbarMenuLink(props: { name: string; icon: React.ReactNode; href: string }) {
  return (
    <NavbarMenuItem className="hover:scale-105">
      <Link className="flex gap-2 items-center" color="foreground" href={props.href} target="_blank">
        {props.icon}

        <p>{props.name}</p>
      </Link>
    </NavbarMenuItem>
  )
}

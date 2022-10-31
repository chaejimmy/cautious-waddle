import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Button,
  Box,
  Spacer,
} from "@chakra-ui/react";

import Image from "next/image";
import {  BsChat, BsBell } from "react-icons/bs";

import { VscAccount } from "react-icons/vsc";
import { GrUserSettings } from "react-icons/gr";
import { BiMessageEdit } from "react-icons/bi";

const Navbar = () => (
  <Flex p="2" pl="10" pr="10" borderBottom="1px" borderColor="gray.100">
    <Box color="blue.400" fontWeight="bold">
      <Image src="/logo.svg" width="118" height="40" alt="logo"></Image>
    </Box>
    <Spacer />
    <Box>
    
        <Button
          border="none"
          as={IconButton}
          icon={<BsChat />}
          variant="outline"
          color="black.400"
          background='white'
          mr={2}
        />
        <Button
          border="none"
          as={IconButton}
          icon={<BsBell />}
          variant="outline"
          color="black.400"
          background='white'
          mr={2}
        />
          <Menu>
        <MenuButton
          border="none"
          as={IconButton}
          icon={<VscAccount />}
          variant="outline"
          fontSize="18"
          color="black.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<BiMessageEdit />}>Edit Profile</MenuItem>
          </Link>
          <Link href="/" passHref>
            <MenuItem icon={<GrUserSettings />}>Settings</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;

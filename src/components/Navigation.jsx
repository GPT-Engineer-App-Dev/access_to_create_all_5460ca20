import React from "react";
import { Box, VStack, Button, Icon, useDisclosure, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

import { FaHome, FaClipboardList, FaCoffee, FaUtensils, FaPlus } from "react-icons/fa";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <IconButton aria-label="Open menu" icon={<Icon as={FaBars} />} onClick={onOpen} bg="gray.400" color="white" m={4} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.400" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              <Button variant="ghost" leftIcon={<Icon as={FaHome} />} onClick={() => navigate("/")}>
                Menus
              </Button>
              <Button variant="ghost" leftIcon={<Icon as={FaClipboardList} />} onClick={() => navigate("/products")}>
                Products
              </Button>
              <Button variant="ghost" leftIcon={<Icon as={FaCoffee} />} onClick={() => navigate("/modifiers")}>
                Modifiers
              </Button>
              <Button variant="ghost" leftIcon={<Icon as={FaUtensils} />} onClick={() => navigate("/allergens")}>
                Allergens
              </Button>
              <Button variant="ghost" leftIcon={<Icon as={FaPlus} />} onClick={() => navigate("/create-allergen")}>
                Create Allergen
              </Button>
              <Button variant="ghost" leftIcon={<Icon as={FaPlus} />} onClick={() => navigate("/create-modifier")}>
                Create Modifier
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navigation; // Don't forget to export the component

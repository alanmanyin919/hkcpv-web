import React from "react";
import {
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  CSSProperties as MantineCssProperties,
  ScrollArea,
  Text,
} from "@mantine/core";
import { Drawer } from "@mantine/core";
import { useMapStore, useSettingsStore } from "@/store";
import { FaPhone, FaGlobe } from "react-icons/fa6";
import { IconType } from "react-icons";
import Image from "next/image";

type RowDetailsProps = {
  icon: JSX.Element;
  text: string;
  link: string;
};

const RowDetails: React.FC<RowDetailsProps> = ({ icon, link, text }) => (
  <Group align="center" style={{ marginBlock: "7px" }}>
    <Box style={{ width: 24, height: 24 }}>{icon}</Box>
    {link ? (
      <Anchor href={link} target="_blank" underline="always">
        {text}
      </Anchor>
    ) : (
      <Text>{text}</Text>
    )}
  </Group>
);

type SideDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const VacancyInfoDisplayDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const currentItem = useMapStore((state) => state.currentCarParkVacancyItem);
  const language = useSettingsStore((state) => state.language);
  return (
    <Drawer.Root
      withinPortal={false}
      opened={isOpen}
      onClose={onClose}
      position="bottom"
      styles={{
        root: styles.sideMenuDrawerRoot,
        overlay: { ...styles.sideMenuDrawerInside },
        inner: {
          ...styles.sideMenuDrawerInside,
          paddingInline: "7px",
        },
        content: {
          ...styles.sideMenuDrawerContent,
        },
      }}
    >
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header>
          {/* {currentItem && (
            <Drawer.Title>
              <Text c="blue" fz="xl" fw={700}>
                {currentItem.name[language]}
              </Text>
            </Drawer.Title>
          )} */}
          <Drawer.CloseButton />
        </Drawer.Header>
        {currentItem && (
          <Drawer.Body>
            {currentItem.carpark_photo && (
              <div style={{width: '100%', height: '100%', position: 'relative'}}>
               <Image
                src={currentItem.carpark_photo}
                alt="Car Park Photo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
              />
            </div>
             
            )}
            <Box style={{ paddingBlock: 15 }}>
              <Text c="blue" fz="xl" fw={700}>
                {currentItem.name[language]}
              </Text>
              <Badge
                color={currentItem.openingStatus === "OPEN" ? "green" : "red"}
              >
                {currentItem.openingStatus}
              </Badge>
            </Box>
            <Divider />
            {currentItem.contactNo && (
              // <Group align="center" style={{ height: "50px" }}>
              //   {/* Icon with fixed width */}
              //   <Box style={{ width: 24, height: 24 }}>
              //     <FaPhone size={18} />
              //   </Box>
              //   {/* Detail Info */}
              //   <Text>{currentItem.contactNo}</Text>
              // </Group>
              <RowDetails
                icon={<FaPhone size={18} />}
                link={`tel:${currentItem.contactNo}`}
                text={currentItem.contactNo}
              />
            )}
            {currentItem.website && (
              <RowDetails
                icon={<FaGlobe size={18} />}
                link={currentItem.website[language]}
                text={currentItem.website[language]}
              />
            )}
            <ScrollArea style={{ height: "100px" }}>
              {JSON.stringify(currentItem)}
            </ScrollArea>
          </Drawer.Body>
        )}
      </Drawer.Content>
    </Drawer.Root>
  );
};

const styles: { [key: string]: MantineCssProperties } = {
  sideMenuDrawerRoot: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
  sideMenuDrawerInside: {
    position: "absolute",
  },
  sideMenuDrawerContent: {
    height: "85%",
    "--paper-radius": "1rem",
  },
};

export default VacancyInfoDisplayDrawer;

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export interface BreadCrumbItem {
  title: string;
  to: string;
}

interface BreadCrumbProps {
  paths: BreadCrumbItem[]
}

export function BreadCrumb({ paths }: BreadCrumbProps) {
  const { colorMode } = useColorMode();
  return (
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} colorScheme="teal">
      {paths.map((path, index, array) => (
        <BreadcrumbItem key={crypto.randomUUID()}>
          <BreadcrumbLink isCurrentPage={index === array.length - 1} color={colorMode === "dark" ? "white" : "black"} as={Link} to={path.to}>
            {path.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

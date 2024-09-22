import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode, ButtonHTMLAttributes } from "react";

// _app page layout
export type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

// button props
export type ButtonProps = {
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  //
  loading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
  icon?: string;
};
// button props
export type CardProps = {
  className?: string;
  href?: string;
  children?: ReactNode;
};

// nav Data types
export interface singleMenuTypes {
  label: string;
  to?: string;
}

// nav Data types
export interface navDataTypes extends singleMenuTypes {
  subItems: singleMenuTypes[];
}

// Define a type for service card items
export type ServiceCardItem = {
  image: { src: string };  
  title: string;
};

// Update CardProps to include service list
export type ServiceCardProps = {
  service_list: ServiceCardItem[];
  button: {
    text: string;
    link: string;
  };
};
export interface ButtonData {
  text: string;
  link: string;
}

export interface GetTouchData {
  title: string;
  description: string;
  button: ButtonData;
}
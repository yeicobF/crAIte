import { type UserJSON } from "@clerk/nextjs/server";

type User = {
  id: UserJSON["id"];
};

type AdFields = {
  about: string;
  type: string;
  name: string;
  org: string;
  // keymsg: string;
  reasons: string;
  deadline: string;
  where: string;
  tone: string;
  who: string;
};

type Brand = {
  ownerId: User["id"];
  id: string;
  brandName: string;
  mood: string;
  description: string;
  purpose: string;
  keywords: string[];
  keyValues: string[];
  targetAudience: string;
  competitors?: string[];
  brandColors?: BrandColors;
  uniqueSellingPoints: string[];
  logoUrl?: string;
  inappropiateContent?: string[];
  brandKit?: BrandKit;
};

type BrandColors = {
  primary: string;
  secondary: string;
  accent: string;
};

type BrandKit = {
  colors: BrandColors;
  logo: string;
  font: string;
};

type BrandKitRequest = {
  brandId: Brand["id"];
  userId: User["id"];
};

type ContentProductType = "post" | "ad" | "kit";

type ContentProduct = {
  name: string;
  description: string;
  img: string;
  id: ContentProductType;
};

export type {
  User,
  Brand,
  BrandColors,
  BrandKit,
  BrandKitRequest,
  AdFields,
  ContentProduct,
  ContentProductType,
};

export type UpdateType = {
  profileUrl?: string;
  license?: string;
  hospitalName?: string;
  hospitalAddress?: string;
  hospitalTel?: string;
  faxNumber?: string;
  licenseImage?: string | File;
};

export type UserType = {
  id?: number;
  birth?: string | undefined;
  createdAt?: string | undefined;
  gender?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
  profileUrl?: string | undefined;
  verified?: number | undefined;
  emailVerified?: number | undefined;
  accountId?: string | undefined;
  hospitalName?: string | undefined;
  license?: string | undefined;
  hospitalTel?: string | undefined;
  hospitalAddress?: string | undefined;
  faxNumber?: string | undefined;
}
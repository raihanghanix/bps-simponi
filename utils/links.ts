interface ILink {
  name: string;
  href: string;
}

export const webLinks: ILink[] = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Pertanian",
    href: "/pertanian",
  },
  {
    name: "Industri",
    href: "/industri",
  },
  {
    name: "PEK",
    href: "/pek",
  },
  {
    name: "Web Entry",
    href: "/web-entry",
  },
];

export const pertanianLinks: ILink[] = [
  {
    name: "Monev",
    href: "https://docs.google.com/spreadsheets/d/1qaN1tKHAAbZNsNojxPzowjDPkfq6dC1nOmBWPszXzNI/edit?usp=sharing",
  },
  {
    name: "Jadwal",
    href: "https://docs.google.com/spreadsheets/d/1Zy5Y_QYtW_d8k8U6vGC5281n_P2QbPdcdYaORYXnckQ/edit?usp=sharing",
  },
  {
    name: "Upload Laporan",
    href: "https://drive.google.com/drive/folders/1-LAdD1hTTLfiXSLqUdZQCGhIiiiqPh-I",
  },
];

export const industriLinks: ILink[] = [
  {
    name: "Monev",
    href: "https://docs.google.com/spreadsheets/d/1SrN96lNEKqjuYXp7-xC--QphvoX_mBUDsT8-hxktBnU/edit?usp=sharing",
  },
  {
    name: "Jadwal",
    href: "https://docs.google.com/spreadsheets/d/1zoQrVY489yCO0kvYcXWBas3m-fxzasKbfS5iT8Im0RM/edit?usp=sharing",
  },
  {
    name: "Upload Laporan",
    href: "#",
  },
];

export const pekLinks: ILink[] = [
  {
    name: "Monev",
    href: "https://docs.google.com/spreadsheets/d/1cVCPSklTRZKE8lvBKAGZZtjH3_5XoibWYJeie8lEuYY/edit?usp=sharing",
  },
  {
    name: "Jadwal",
    href: "https://docs.google.com/spreadsheets/d/153mkPUrAgaqVXi9Je8LqPgnWx4c9ywiz_lsDsU7b2TQ/edit?usp=sharing",
  },
  {
    name: "Upload Laporan",
    href: "#",
  },
];

export const webEntryLinks: ILink[] = [
  {
    name: "Perkebunan Tahunan",
    href: "http://pengolahan.bps.go.id/",
  },
  {
    name: "Perkebunan Bulanan",
    href: "https://skb.bps.go.id/pb",
  },
  {
    name: "Perikanan",
    href: "https://ipd.bps.go.id/perikanan",
  },
  {
    name: "Kehutanan",
    href: "https://webentry.bps.go.id/kehutanan",
  },
];

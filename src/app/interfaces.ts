interface LinkData {
  shortLink: string;
  longLink: string;
}

interface StatCardDetail {
  iconSrc: string;
  title: string;
  description: string;
}

interface SocialLink {
  icon: string;
  name: string;
  url: string;
}

interface FooterLink {
  name: string;
  url: string;
}

interface FooterColumn {
  featureLink: FooterLink;
  subLinks: Array<FooterLink>;
}

export { LinkData, StatCardDetail, SocialLink, FooterColumn };

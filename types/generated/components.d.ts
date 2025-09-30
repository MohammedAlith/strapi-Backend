import type { Schema, Struct } from '@strapi/strapi';

export interface HomeAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_home_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    aboutsvg: Schema.Attribute.Component<'home.logo', false>;
    desc: Schema.Attribute.Text;
    details: Schema.Attribute.JSON;
    imgs: Schema.Attribute.Component<'home.imgs', false>;
    intro: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeAchievements extends Struct.ComponentSchema {
  collectionName: 'components_home_achievements';
  info: {
    displayName: 'Achievements';
  };
  attributes: {
    icon: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface HomeCommunity extends Struct.ComponentSchema {
  collectionName: 'components_home_communities';
  info: {
    displayName: 'community';
  };
  attributes: {
    button: Schema.Attribute.JSON;
    desc: Schema.Attribute.Text;
    img: Schema.Attribute.Component<'shared.media', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomeContact extends Struct.ComponentSchema {
  collectionName: 'components_home_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    imgs: Schema.Attribute.Component<'home.imgs', false>;
    title: Schema.Attribute.String;
    types: Schema.Attribute.JSON;
  };
}

export interface HomeDesc extends Struct.ComponentSchema {
  collectionName: 'components_home_descs';
  info: {
    displayName: 'desc';
  };
  attributes: {
    desc1: Schema.Attribute.Text;
    desc2: Schema.Attribute.Text;
  };
}

export interface HomeDescription extends Struct.ComponentSchema {
  collectionName: 'components_home_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {};
}

export interface HomeDetails extends Struct.ComponentSchema {
  collectionName: 'components_home_details';
  info: {
    displayName: 'Details';
  };
  attributes: {
    intro: Schema.Attribute.String;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface HomeFooter extends Struct.ComponentSchema {
  collectionName: 'components_home_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    icons: Schema.Attribute.JSON;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logourl: Schema.Attribute.String;
    resources: Schema.Attribute.JSON;
  };
}

export interface HomeHelp extends Struct.ComponentSchema {
  collectionName: 'components_home_helps';
  info: {
    displayName: 'help';
  };
  attributes: {
    list: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface HomeImgs extends Struct.ComponentSchema {
  collectionName: 'components_home_imgs';
  info: {
    displayName: 'Imgs';
  };
  attributes: {
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img1url1: Schema.Attribute.String;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2url2: Schema.Attribute.String;
  };
}

export interface HomeInfo extends Struct.ComponentSchema {
  collectionName: 'components_home_infos';
  info: {
    displayName: 'info';
  };
  attributes: {
    intro: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface HomeLearning extends Struct.ComponentSchema {
  collectionName: 'components_home_learnings';
  info: {
    displayName: 'learning';
  };
  attributes: {
    list: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface HomeLogo extends Struct.ComponentSchema {
  collectionName: 'components_home_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    svg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface HomeNavtab extends Struct.ComponentSchema {
  collectionName: 'components_home_navtabs';
  info: {
    displayName: 'Navtab';
  };
  attributes: {
    logo: Schema.Attribute.Component<'home.logo', false>;
    navicons: Schema.Attribute.JSON;
    navtabs: Schema.Attribute.JSON;
  };
}

export interface HomeResources extends Struct.ComponentSchema {
  collectionName: 'components_home_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {};
}

export interface HomeSteps extends Struct.ComponentSchema {
  collectionName: 'components_home_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    description: Schema.Attribute.String;
    stepno: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomeSupport extends Struct.ComponentSchema {
  collectionName: 'components_home_supports';
  info: {
    displayName: 'support';
  };
  attributes: {
    list: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface HomeTeamMembers extends Struct.ComponentSchema {
  collectionName: 'components_home_team_members';
  info: {
    displayName: 'TeamMembers';
  };
  attributes: {
    details: Schema.Attribute.Component<'home.info', true>;
    img: Schema.Attribute.Component<'shared.media', false>;
  };
}

export interface HomeTeamsProfessionals extends Struct.ComponentSchema {
  collectionName: 'components_home_teams_professionals';
  info: {
    displayName: 'TeamsProfessionals';
  };
  attributes: {
    details: Schema.Attribute.Component<'home.details', true>;
    Icons: Schema.Attribute.JSON;
    Imgs: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface HomeWorkSection extends Struct.ComponentSchema {
  collectionName: 'components_home_work_sections';
  info: {
    displayName: 'workSection';
  };
  attributes: {
    button: Schema.Attribute.String;
    desc: Schema.Attribute.Component<'home.desc', false>;
    heading: Schema.Attribute.String;
    intro: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'home.steps', true>;
    title: Schema.Attribute.String;
    worksvg: Schema.Attribute.Component<'home.logo', false>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Img';
    icon: 'file-video';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    imgurl: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.about-section': HomeAboutSection;
      'home.achievements': HomeAchievements;
      'home.community': HomeCommunity;
      'home.contact': HomeContact;
      'home.desc': HomeDesc;
      'home.description': HomeDescription;
      'home.details': HomeDetails;
      'home.footer': HomeFooter;
      'home.help': HomeHelp;
      'home.imgs': HomeImgs;
      'home.info': HomeInfo;
      'home.learning': HomeLearning;
      'home.logo': HomeLogo;
      'home.navtab': HomeNavtab;
      'home.resources': HomeResources;
      'home.steps': HomeSteps;
      'home.support': HomeSupport;
      'home.team-members': HomeTeamMembers;
      'home.teams-professionals': HomeTeamsProfessionals;
      'home.work-section': HomeWorkSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}

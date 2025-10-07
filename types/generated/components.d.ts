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
    list: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface HomeBenefits extends Struct.ComponentSchema {
  collectionName: 'components_home_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    button: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Component<'home.benefitslist', true>;
  };
}

export interface HomeBenefitslist extends Struct.ComponentSchema {
  collectionName: 'components_home_benefitslists';
  info: {
    displayName: 'benefitslist';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeCards extends Struct.ComponentSchema {
  collectionName: 'components_home_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    intro: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface HomeCareerMain extends Struct.ComponentSchema {
  collectionName: 'components_home_career_mains';
  info: {
    displayName: 'CareerMain';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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

export interface HomeContactMain extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_mains';
  info: {
    displayName: 'ContactMain';
  };
  attributes: {
    desc: Schema.Attribute.String;
    desc2: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgurl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeCustomer extends Struct.ComponentSchema {
  collectionName: 'components_home_customers';
  info: {
    displayName: 'customer';
  };
  attributes: {
    button: Schema.Attribute.String;
    desc1: Schema.Attribute.Text;
    desc2: Schema.Attribute.Text;
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img1url1: Schema.Attribute.Text;
    img2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    img2url2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    value: Schema.Attribute.String;
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

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    list: Schema.Attribute.Component<'home.faqlist', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeFaqlist extends Struct.ComponentSchema {
  collectionName: 'components_home_faqlists';
  info: {
    displayName: 'faqlist';
  };
  attributes: {
    ans: Schema.Attribute.Text;
    ques: Schema.Attribute.Text;
  };
}

export interface HomeFoot extends Struct.ComponentSchema {
  collectionName: 'components_home_feet';
  info: {
    displayName: 'foot';
  };
  attributes: {
    footer: Schema.Attribute.JSON;
    logo: Schema.Attribute.Component<'shared.media', false>;
  };
}

export interface HomeForm extends Struct.ComponentSchema {
  collectionName: 'components_home_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    Button: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    Inputsplaceholder: Schema.Attribute.JSON;
    mandatory: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slides: Schema.Attribute.JSON;
    url1: Schema.Attribute.String;
    url2: Schema.Attribute.String;
    url3: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videourl: Schema.Attribute.String;
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
    img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img3url3: Schema.Attribute.String;
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

export interface HomeList extends Struct.ComponentSchema {
  collectionName: 'components_home_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    Description: Schema.Attribute.JSON;
    Title: Schema.Attribute.String;
  };
}

export interface HomeList2 extends Struct.ComponentSchema {
  collectionName: 'components_home_list2s';
  info: {
    displayName: 'list2';
  };
  attributes: {};
}

export interface HomeLocation extends Struct.ComponentSchema {
  collectionName: 'components_home_locations';
  info: {
    displayName: 'Location';
  };
  attributes: {
    list1: Schema.Attribute.Component<'home.list', true>;
    mapurl: Schema.Attribute.Text;
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

export interface HomeModel extends Struct.ComponentSchema {
  collectionName: 'components_home_models';
  info: {
    displayName: 'model';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgurl: Schema.Attribute.Text;
    videourl: Schema.Attribute.Text;
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

export interface HomePositionlist extends Struct.ComponentSchema {
  collectionName: 'components_home_positionlists';
  info: {
    displayName: 'positionlist';
  };
  attributes: {
    loc: Schema.Attribute.Text;
    logo: Schema.Attribute.String;
    role: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface HomePositions extends Struct.ComponentSchema {
  collectionName: 'components_home_positions';
  info: {
    displayName: 'positions';
  };
  attributes: {
    ans: Schema.Attribute.Text;
    button: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    lists: Schema.Attribute.Component<'home.positionlist', true>;
    ques: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomePrice extends Struct.ComponentSchema {
  collectionName: 'components_home_prices';
  info: {
    displayName: 'Price';
  };
  attributes: {
    button: Schema.Attribute.Text;
    choose: Schema.Attribute.JSON;
    desc: Schema.Attribute.Text;
    desc2: Schema.Attribute.String;
    pricecard: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface HomeResources extends Struct.ComponentSchema {
  collectionName: 'components_home_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {};
}

export interface HomeServicemain extends Struct.ComponentSchema {
  collectionName: 'components_home_servicemains';
  info: {
    displayName: 'servicemain';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgurl: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    displayName: 'services';
  };
  attributes: {};
}

export interface HomeSignin extends Struct.ComponentSchema {
  collectionName: 'components_home_signins';
  info: {
    displayName: 'Signin';
  };
  attributes: {
    button: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    Inputsplaceholder: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
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

export interface HomeStepslist extends Struct.ComponentSchema {
  collectionName: 'components_home_stepslists';
  info: {
    displayName: 'stepslist';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    steplist: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
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

export interface HomeSupportive extends Struct.ComponentSchema {
  collectionName: 'components_home_supportives';
  info: {
    displayName: 'supportive';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2url2: Schema.Attribute.Text;
    img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img3url3: Schema.Attribute.Text;
    img4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img4url4: Schema.Attribute.Text;
    imgurl1: Schema.Attribute.Text;
    list: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface HomeTeam extends Struct.ComponentSchema {
  collectionName: 'components_home_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    card: Schema.Attribute.Component<'home.cards', true>;
    desc: Schema.Attribute.Text;
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
      'home.benefits': HomeBenefits;
      'home.benefitslist': HomeBenefitslist;
      'home.cards': HomeCards;
      'home.career-main': HomeCareerMain;
      'home.community': HomeCommunity;
      'home.contact': HomeContact;
      'home.contact-main': HomeContactMain;
      'home.customer': HomeCustomer;
      'home.desc': HomeDesc;
      'home.description': HomeDescription;
      'home.details': HomeDetails;
      'home.faq': HomeFaq;
      'home.faqlist': HomeFaqlist;
      'home.foot': HomeFoot;
      'home.form': HomeForm;
      'home.help': HomeHelp;
      'home.hero': HomeHero;
      'home.imgs': HomeImgs;
      'home.info': HomeInfo;
      'home.learning': HomeLearning;
      'home.list': HomeList;
      'home.list2': HomeList2;
      'home.location': HomeLocation;
      'home.logo': HomeLogo;
      'home.model': HomeModel;
      'home.navtab': HomeNavtab;
      'home.positionlist': HomePositionlist;
      'home.positions': HomePositions;
      'home.price': HomePrice;
      'home.resources': HomeResources;
      'home.servicemain': HomeServicemain;
      'home.services': HomeServices;
      'home.signin': HomeSignin;
      'home.steps': HomeSteps;
      'home.stepslist': HomeStepslist;
      'home.support': HomeSupport;
      'home.supportive': HomeSupportive;
      'home.team': HomeTeam;
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

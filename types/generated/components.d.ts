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
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
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
      'home.desc': HomeDesc;
      'home.description': HomeDescription;
      'home.imgs': HomeImgs;
      'home.logo': HomeLogo;
      'home.navtab': HomeNavtab;
      'home.steps': HomeSteps;
      'home.work-section': HomeWorkSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}

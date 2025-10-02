export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://market-assets.strapi.io',
            'https://oebiqlayntcsanrbmysd.supabase.co',
          ],
           'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://your-video-domain.com',
             'https://oebiqlayntcsanrbmysd.supabase.co', // replace with your video host if any
          ],
          'video-src': [
            "'self'",
            'data:',
            'blob:',
            'https://your-video-domain.com',
             'https://oebiqlayntcsanrbmysd.supabase.co',
          ],
        
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

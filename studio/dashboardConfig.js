export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603ccd3d539ec870b2f84757',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-nozdt3tp',
                  apiId: '66c4695d-e7c9-4509-8c76-1675776d74f2'
                },
                {
                  buildHookId: '603ccd3ebb172b9400718c3c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-cifiq4tv',
                  apiId: '3e464a3b-64d6-4c53-a342-a0befbe20f9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sajj01/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-cifiq4tv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

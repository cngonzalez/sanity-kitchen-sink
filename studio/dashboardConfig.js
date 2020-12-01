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
                  buildHookId: '5fc697cb8cb0053bd2279fc7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-71h3zs2y',
                  apiId: 'ed440754-ab73-46e9-bbb8-0126d0334e2d'
                },
                {
                  buildHookId: '5fc697cb6399613a59e5c7a0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fynxwh7a',
                  apiId: 'de8719d6-fe20-454b-b947-4abeda4807a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cngonzalez/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fynxwh7a.netlify.app', category: 'apps'}
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

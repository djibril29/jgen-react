import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Article de blog',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'date', title: 'Date', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'excerpt', title: 'Résumé', type: 'text' }),
    defineField({ name: 'coverImage', title: 'Image de couverture', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'body', title: 'Contenu', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'programs', title: 'Programmes liés', type: 'array', of: [{ type: 'reference', to: [{ type: 'program' }] }] }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: { list: [
        { title: 'Actualités', value: 'Actualités' },
        { title: 'evenements', value: 'evenements' },
        { title: 'témoignages', value: 'témoignages' },
      ]},
    }),
    defineField({
      name: 'themes',
      title: 'Thèmes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          { title: 'féminisme', value: 'féminisme' },
          { title: 'droits des femmes', value: 'droits des femmes' },
          { title: 'VBG', value: 'VBG' },
          { title: 'santé reproductive', value: 'santé reproductive' },
          { title: 'autonomisation', value: 'autonomisation' },
          { title: 'éducation', value: 'éducation' },
          { title: 'plaidoyer', value: 'plaidoyer' },
          { title: 'justice sociale', value: 'justice sociale' },
        ],
      },
    }),
  ],
}) 
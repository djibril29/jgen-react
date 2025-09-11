import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Ressource',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'date', title: 'Date', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'type', title: 'Type', type: 'string', options: { list: ['pdf', 'video', 'image'] } }),
    defineField({ name: 'file', title: 'Fichier', type: 'file' }),
    defineField({ name: 'url', title: 'URL externe (optionnel)', type: 'url' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'programs', title: 'Programmes liés', type: 'array', of: [{ type: 'reference', to: [{ type: 'program' }] }] }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: { list: [
        { title: 'outils de formation', value: 'outils de formation' },
        { title: 'rapport annuel', value: 'rapport annuel' },
        { title: 'guide pratique', value: 'guide pratique' },
        { title: 'outils de plaidoyer', value: 'outils de plaidoyer' },
      ]},
    }),
  ],
}) 
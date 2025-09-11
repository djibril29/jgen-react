import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Accueil',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSlides',
      title: 'Hero / Slides',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'title', title: 'Titre', type: 'string' },
        { name: 'excerpt', title: 'Extrait', type: 'text' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'link', title: 'Lien', type: 'url' },
      ]}],
    }),
    defineField({
      name: 'stats',
      title: 'Statistiques',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'number', title: 'Nombre', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ]}],
    }),
    defineField({ name: 'featuredPrograms', title: 'Programmes à la une', type: 'array', of: [{ type: 'reference', to: [{ type: 'program' }] }] }),
    defineField({ name: 'news', title: 'Actualités à la une', type: 'array', of: [{ type: 'reference', to: [{ type: 'blogPost' }] }] }),
  ],
}) 
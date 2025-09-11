import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'program',
  title: 'Programme',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'coverImage', title: 'Image de couverture', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'intro', title: 'Introduction (courte)', type: 'text' }),
    defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'stats',
      title: 'Chiffres clés',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'value', title: 'Valeur', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ]}],
    }),
    defineField({
      name: 'objectives',
      title: 'Objectifs',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'title', title: 'Titre', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ]}],
    }),
    defineField({
      name: 'achievementsDetailed',
      title: 'Réalisations (détaillées)',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'value', title: 'Valeur', type: 'string' },
        { name: 'title', title: 'Titre', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'icon', title: 'Icône (optionnel, texte)', type: 'string' },
      ]}],
    }),
    defineField({ name: 'partners', title: 'Partenaires (noms)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'partnerLogos', title: 'Logos partenaires', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'gallery', title: 'Galerie', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: { list: [
        { title: 'Plaidoyer', value: 'Plaidoyer' },
        { title: 'Sensibilisation', value: 'Sensibilisation' },
        { title: 'Renforcement des Capacités', value: 'Renforcement des Capacités' },
        { title: 'Réseautage et Partenariat', value: 'Réseautage et Partenariat' },
      ]},
    }),
  ],
}) 
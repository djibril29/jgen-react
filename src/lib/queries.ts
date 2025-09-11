import groq from 'groq'

export const blogList = groq`*[_type == "blogPost"]{ _id, title, "slug": slug.current, date, excerpt, coverImage } | order(date desc)`
export const blogBySlug = groq`*[_type == "blogPost" && slug.current == $slug][0]{ _id, title, date, excerpt, coverImage, body }`

export const programsList = groq`*[_type == "program"]{ _id, title, "slug": slug.current, coverImage } | order(title asc)`
export const programBySlug = groq`*[_type == "program" && slug.current == $slug][0]{ _id, title, coverImage, intro, description, stats, objectives, achievementsDetailed, partners, partnerLogos, gallery }`

export const resourcesList = groq`*[_type == "resource"]{ _id, title, "slug": slug.current, date, type, file, url, description } | order(date desc)`
export const resourceBySlug = groq`*[_type == "resource" && slug.current == $slug][0]{ _id, title, date, type, url, description, file }`

export const homeDoc = groq`*[_type == "home"][0]{ heroSlides[], stats[], featuredPrograms[]->, news[]-> }` 
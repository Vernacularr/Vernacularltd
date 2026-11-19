// true shows the full site. false shows the holding page on every route.
// A deploy can override this with VITE_SHOW_FULL_SITE=true or false.
const fromEnv = import.meta.env.VITE_SHOW_FULL_SITE
export const showFullSite = fromEnv === undefined ? false : fromEnv === 'true'

export const instagramDmUrl = 'https://ig.me/m/vernacular.co'

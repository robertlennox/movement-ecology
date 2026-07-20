/**
 * Converts names for people and projects into slugs that will be used for 
 * dynamic rendering
 * @param {*} str String of the person or project 
 * @returns a slugified string. e.g. "Boyd Pelley" -> "boyd-pelley"
 */
export const slugify = (str = '') => 
  str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Strip punctuation
    .replace(/\s+/g, '-') // convert spaces into dashes
    .replace(/-+/g, '-'); // collapse repeats


/**
 * Parse a "YYYY-MM-DD" string without going through Date class
 * @param {*} iso date to parse
 * @returns parsed date: e.g. "January 2026"
 */
export const formatDate = (iso = '') => {
  const [y, m] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  if (!y || !m) return iso;
  return `${months[m - 1]} ${y}`;
}

/** 
 * A project's URL slug: use an explicit `slug` if the author set one, else 
 * derive from name. 
 */
export const projectSlug = (project) => project.slug || slugify(project.name);

/**
 * Normalizes the images and texts for given project so that we can just map
 * over all of the data 
 */
export const getContentBlocks = (project, max = 5) => {
  const blocks = [];
  for (let i = 1; i <= max; i++) {
    const image = project[`image${i}`];
    const text = project[`text${i}`];
    if (image || text) blocks.push({ image, text });
  }
  return blocks;
};

/** 
 * Detect by extension so the carousel can pick <video> vs <img>. 
 */
export const isVideo = (src = '') => /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(String(src));
export const HOMEPAGE_GET_PROFILE_PROJECTION = `
    _id,
    fullName,
    role,
    profileImage {alt, "image": asset->url},
    city,
    email,
    phoneNumber,
    "resumeURL": resumeURL.asset->url,
    socialLinks,
`
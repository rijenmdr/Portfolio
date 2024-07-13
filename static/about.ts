export const ABOUT_GET_PROFILE_PROJECTION = `
    _id,
    fullName,
    role,
    secondaryImage {alt, "image": asset->url},
    city,
    country,
    experience,
    headline,
    quote,
    quoteBy,
    email,
    phoneNumber,
    dateOfBirth,
    "resumeURL": resumeURL.asset->url,
`
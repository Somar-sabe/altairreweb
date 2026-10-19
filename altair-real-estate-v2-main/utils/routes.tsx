const emptyList = {
    Data: [],
    Items: [],
    Results: [],
    TotalCount: 0,
    Total: 0,
    Page: 0,
    PageSize: 0,
}

const emptyData = {
    Data: [],
}

export const getProperties = async (
    params?: { [key: string]: any },
    lang = 'en'
) => {
    return emptyList
}

export const getPropertyById = async (Id: number, lang = 'en') => {
    return null
}

export const getProjects = async (
    params?: { [key: string]: any },
    lang = 'en'
) => {
    return emptyList
}

export const getProjectById = async (Id: number, lang = 'en') => {
    return null
}

export const getMasterData = async (lang = 'en') => {
    return emptyData
}

export const getCurrencies = async () => {
    return emptyData
}

export const getTeam = async (
    params: { [key: string]: any },
    lang = 'en'
) => {
    return emptyList
}

export const postContact = async (params: { [key: string]: any }) => {
    return {
        success: false,
        message: 'Contact submission is unavailable in static mode.',
    }
}

export const getArticles = async (
    params: { [key: string]: any },
    lang = 'en'
) => {
    return emptyList
}

export const getArticlesById = async (id: number, lang = 'en') => {
    return null
}

export const postSubscribe = async (params: { [key: string]: any }) => {
    return {
        success: false,
        message: 'Subscription is unavailable in static mode.',
    }
}

export const getProjectSitemap = async () => {
    return emptyList
}

export const getSalesSitemap = async () => {
    return emptyList
}

export const getRentalsSitemap = async () => {
    return emptyList
}

export const getBlogsSitemap = async () => {
    return emptyList
}

export const getNewsSitemap = async () => {
    return emptyList
}
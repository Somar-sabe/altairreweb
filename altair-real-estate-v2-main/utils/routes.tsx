type EmptyList = {
    Data: any[]
    Items: any[]
    Results: any[]
    TotalCount: number
    Total: number
    Page: number
    PageSize: number
}

type EmptyData = {
    Data: any[]
}

const emptyList: EmptyList = {
    Data: [],
    Items: [],
    Results: [],
    TotalCount: 0,
    Total: 0,
    Page: 0,
    PageSize: 0,
}

const emptyData: EmptyData = {
    Data: [],
}

export const getProperties = async (
    params?: { [key: string]: any },
    lang = 'en'
): Promise<EmptyList> => {
    return emptyList
}

export const getPropertyById = async (
    Id: number,
    lang = 'en'
): Promise<any> => {
    return {
        Id,
        Name: '',
        Title: '',
        Description: '',
        Price: 0,
        Area: { Name: '' },
        City: { Name: '' },
        Developer: { Name: '' },
        Images: [],
        Sections: [],
    }
}

export const getProjects = async (
    params?: { [key: string]: any },
    lang = 'en'
): Promise<EmptyList> => {
    return emptyList
}

export const getProjectById = async (
    Id: number,
    lang = 'en'
): Promise<any> => {
    return {
        Id,
        Name: '',
        Title: '',
        Description: '',
        Area: { Name: '' },
        City: { Name: '' },
        Developer: { Name: '' },
        Images: [],
        Sections: [],
    }
}

export const getMasterData = async (
    lang = 'en'
): Promise<EmptyData> => {
    return emptyData
}

export const getCurrencies = async (): Promise<EmptyData> => {
    return emptyData
}

export const getTeam = async (
    params: { [key: string]: any },
    lang = 'en'
): Promise<EmptyList> => {
    return emptyList
}

export const postContact = async (
    params: { [key: string]: any }
): Promise<{ success: boolean; message: string }> => {
    return {
        success: false,
        message: 'Contact submission is unavailable in static mode.',
    }
}

export const getArticles = async (
    params: { [key: string]: any },
    lang = 'en'
): Promise<EmptyList> => {
    return emptyList
}

export const getArticlesById = async (
    id: number,
    lang = 'en'
): Promise<any> => {
    return {
        Id: id,
        Title: '',
        Description: '',
        Sections: [],
        Images: [],
    }
}

export const postSubscribe = async (
    params: { [key: string]: any }
): Promise<{ success: boolean; message: string }> => {
    return {
        success: false,
        message: 'Subscription is unavailable in static mode.',
    }
}

export const getProjectSitemap = async (): Promise<EmptyList> => {
    return emptyList
}

export const getSalesSitemap = async (): Promise<EmptyList> => {
    return emptyList
}

export const getRentalsSitemap = async (): Promise<EmptyList> => {
    return emptyList
}

export const getBlogsSitemap = async (): Promise<EmptyList> => {
    return emptyList
}

export const getNewsSitemap = async (): Promise<EmptyList> => {
    return emptyList
}
import { getProjects as getMockProjects, projects } from '@/data/projects'

type EmptyList = {
    Data: any[]
    Items: any[]
    Results: any[]
    Count: number // used by PropertyFilteringBannerTwo
    PageCount: number // used by PropertyFilteringBannerTwo
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
    Count: 0,
    PageCount: 0,
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

// ---- Projects: served from the local mock (src/data/projects.ts) ----
export const getProjects = async (
    params?: { [key: string]: any },
    lang = 'en'
): Promise<any> => {
    return getMockProjects(
        { PageSize: 9, Page: 0, ...(params ?? {}) },
        lang
    )
}

export const getProjectById = async (
    Id: number | string,
    lang = 'en'
): Promise<any> => {
    // The URL carries a slug like "al-abeir-tower-945": accept slug or numeric id.
    const raw = String(Id)
    const num = parseInt(raw.split('-').pop() ?? '', 10)
    const p = projects.find((x) => x.Slug === raw || x.Id === num)
    // Not found: no Id, so the page redirects back to the list.
    return p ?? { Name: '', Images: [] }
}

export const getMasterData = async (lang = 'en'): Promise<EmptyData> => {
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

export const postContact = async (params: {
    [key: string]: any
}): Promise<{ success: boolean; message: string }> => {
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

export const postSubscribe = async (params: {
    [key: string]: any
}): Promise<{ success: boolean; message: string }> => {
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
const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`

export const getProperties = async (
    params?: { [key: string]: any },
    lang = 'en'
) => {
    const res = await fetch(
        `${BASE_URL}/properties?${new URLSearchParams({
            ...params,
        })?.toString()}`,
        {
            headers: {
                'translate-lang': lang,
            },
        }
    )
    const data = await res.json()
    return data
}

export const getPropertyById = async (Id: number, lang = 'en') => {
    const res = await fetch(`${BASE_URL}/properties/${Id}`, {
        headers: {
            'translate-lang': lang,
        },
    })
    const data = await res.json()
    return data
}

export const getProjects = async (
    params?: { [key: string]: any },
    lang = 'en'
) => {
    const res = await fetch(
        `${BASE_URL}/projects?${new URLSearchParams({
            ...params,
        })?.toString()}`,
        {
            headers: {
                'translate-lang': lang,
            },
        }
    )
    const data = await res.json()
    return data
}

export const getProjectById = async (Id: number, lang = 'en') => {
    const res = await fetch(`${BASE_URL}/projects/${Id}`, {
        headers: {
            'translate-lang': lang,
        },
    })
    const data = await res.json()
    return data
}

export const getMasterData = async (lang = 'en') => {
    const res = await fetch(`${BASE_URL}/properties/masterdata`, {
        headers: {
            'translate-lang': lang,
        },
    })
    const data = await res.json()
    return data
}

export const getCurrencies = async () => {
    const res = await fetch(`${BASE_URL}/home/exchange-rates`, {})
    const data = await res.json()
    return data
}

export const getTeam = async (params: { [key: string]: any }, lang = 'en') => {
    const res = await fetch(
        `${BASE_URL}/employees?${new URLSearchParams(params)?.toString()}`,
        {
            headers: {
                'translate-lang': lang,
            },
        }
    )
    const data = await res.json()
    return data
}

export const postContact = async (params: { [key: string]: any }) => {
    const res = await fetch(`${BASE_URL}/contacts`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data)
    return data
}

export const getArticles = async (
    params: { [key: string]: any },
    lang = 'en'
) => {
    const res = await fetch(
        `${BASE_URL}/articles?${new URLSearchParams(params)?.toString()}`,
        {
            headers: {
                'translate-lang': lang,
            },
        }
    )
    const data = await res.json()
    return data
}

export const getArticlesById = async (id: number, lang = 'en') => {
    const res = await fetch(`${BASE_URL}/articles/${id}`, {
        headers: {
            'translate-lang': lang,
        },
    })
    const data = await res.json()
    return data
}

export const postSubscribe = async (params: { [key: string]: any }) => {
    const res = await fetch(`${BASE_URL}/contacts/subscription`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return data
}

export const getProjectSitemap = async () => {
    const res = await fetch(`${BASE_URL}/home/sitemap-data/projects`, {
        method: 'GET',

        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return data
}

export const getSalesSitemap = async () => {
    const res = await fetch(`${BASE_URL}/home/sitemap-data/sales`, {
        method: 'GET',

        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return data
}

export const getRentalsSitemap = async () => {
    const res = await fetch(`${BASE_URL}/home/sitemap-data/rentals`, {
        method: 'GET',

        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return data
}

export const getBlogsSitemap = async () => {
    const res = await fetch(`${BASE_URL}/home/sitemap-data/blogs`, {
        method: 'GET',

        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return data
}

export const getNewsSitemap = async () => {
    const res = await fetch(`${BASE_URL}/home/sitemap-data/news`, {
        method: 'GET',

        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return data
}

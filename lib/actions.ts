export const getSites = async () => {
    const sites = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sites`);
    return await sites.json();
};

export const getSiteDetails = async (siteId: string) => {
    const site = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/sites/${siteId}`
    );
    return await site.json();
};

export const getTours = async () => {
    const tours = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tours`);
    return await tours.json();
};

export const getTourDetails = async (tourId: string) => {
    const tour = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tours/${tourId}`
    );
    return await tour.json();
};

export const getNews = async () => {
    const news = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`);
    return await news.json();
};

export const getNewsDetails = async (newsId: string) => {
    const news = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/news/${newsId}`
    );
    return await news.json();
};

export const getSearchedTours = async (query: string) => {
    const searchedTours = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search/${query}`
    );
    return await searchedTours.json();
};

export const getOrders = async (customerId: string) => {
    const orders = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`
    );
    return await orders.json();
};

export const getRelatedTours = async (tourId: string) => {
    const relatedTours = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tours/${tourId}/related`
    );
    return await relatedTours.json();
};

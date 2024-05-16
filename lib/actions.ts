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

export const getSearchedTours = async (query: string) => {
    const searchedTours = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search/${query}`
    );
    return await searchedTours.json();
};

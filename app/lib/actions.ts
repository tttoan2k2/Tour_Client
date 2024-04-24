export const getSites = async () => {
    const sites = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sites`);

    return await sites.json();
};

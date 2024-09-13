"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import TourCard from "./TourCard";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import Spinner from "./Spinner";

type SortOrder = "none" | "lowToHigh" | "highToLow";

const FilterTour = () => {
    const [tours, setTours] = useState<TourType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState<SortOrder>("none");
    const [filteredTours, setFilteredTours] = useState<TourType[]>(tours);

    const getTours = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/tours`,
                {
                    method: "GET",
                }
            );

            const data = await res.json();
            setTours(data);
            setLoading(false);
        } catch (err) {
            console.log("[getTours]", err);
        }
    };

    useEffect(() => {
        getTours();
    }, []);

    const categories = Array.from(
        new Set(tours.map((tour: TourType) => tour.category))
    );

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    useEffect(() => {
        let newFilteredProducts = tours.filter(
            (tour) =>
                selectedCategories.length === 0 ||
                selectedCategories.includes(tour.category)
        );

        if (sortOrder === "lowToHigh") {
            newFilteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "highToLow") {
            newFilteredProducts.sort((a, b) => b.price - a.price);
        }

        setFilteredTours(newFilteredProducts);
    }, [selectedCategories, sortOrder]);

    console.log(filteredTours);

    return loading ? (
        <Spinner />
    ) : (
        <div className="flex flex-col lg:flex-row gap-5">
            <div className=" bg-white p-5 rounded-lg flex items-start gap-5 mb-8 flex-col lg:w-[300px] w-full h-max">
                <h1 className="text-[22px] font-medium">Lọc Tour theo</h1>

                <div>
                    <p className="mb-3 text-[20px]">Loại hình</p>
                    <ScrollArea className="h-[300px] md:h-auto">
                        {categories.map((category: any) => (
                            <div
                                key={category}
                                className="flex items-center space-x-2 mb-2"
                            >
                                <Checkbox
                                    id={category}
                                    checked={selectedCategories.includes(
                                        category
                                    )}
                                    onCheckedChange={() =>
                                        toggleCategory(category)
                                    }
                                />
                                <Label htmlFor={category}>{category}</Label>
                            </div>
                        ))}
                    </ScrollArea>
                </div>
                <div>
                    <p className="mb-3 text-[20px]">Giá</p>
                    <Select
                        value={sortOrder}
                        onValueChange={(value: SortOrder) =>
                            setSortOrder(value)
                        }
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select sort order" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">Không chọn</SelectItem>
                            <SelectItem value="lowToHigh">
                                Từ thấp tới cao 📈
                            </SelectItem>
                            <SelectItem value="highToLow">
                                Từ cao xuống thấp 📉
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {!filteredTours || filteredTours.length === 0 ? (
                <div className="flex items-start  gap-5 flex-wrap w-full">
                    {tours.map((tour: TourType) => (
                        <TourCard key={tour._id} tour={tour} />
                    ))}
                </div>
            ) : (
                <div className="flex items-start  gap-5 flex-wrap w-full">
                    {filteredTours.map((tour: TourType) => (
                        <TourCard key={tour._id} tour={tour} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterTour;

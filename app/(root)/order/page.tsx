import { getOrders } from "@/lib/actions";
import { auth } from "@clerk/nextjs";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

const Orders = async () => {
    const { userId } = auth();
    const data = await getOrders(userId as string);
    const orders = data.reverse();

    return (
        <div className="px-[20px] lg:px-[100px] py-[50px]">
            <p className="text-[20px] md:text-[30px] font-semibold mb-[10px]">
                Các Tour đã đặt của bạn
            </p>
            {(!orders || orders.length === 0) && (
                <p className="text-[20px]">Bạn chưa đặt Tour nào.</p>
            )}

            <div className="grid gap-6">
                {orders?.map((order: OrderType) => (
                    <Card key={order._id}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="text-[20px] font-medium">
                                    Order Id: {order._id}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {order.createdAt}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                {order.tours.map((item, index) => (
                                    <div key={index} className="">
                                        <p className="mb-2">
                                            <span className="font-medium text-[18px]">
                                                Tour:
                                            </span>{" "}
                                            <span className=" text-[16px] capitalize">
                                                {item.tourName}
                                            </span>
                                        </p>
                                        <p className="mb-[20px]">
                                            <span className="font-medium text-[18px]">
                                                Ngày khởi hành:
                                            </span>{" "}
                                            <span className=" text-[16px] capitalize">
                                                {item.tourDate}
                                            </span>
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm">
                                                    Vé người lớn
                                                </div>
                                                <div className="text-sm">
                                                    {item?.adultQuantity} x{" "}
                                                    {item?.tour?.price.toLocaleString(
                                                        "vi-VN"
                                                    )}
                                                    đ
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="text-sm">
                                                    Vé học sinh
                                                </div>
                                                <div className="text-sm">
                                                    {item?.childrenQuantity} x{" "}
                                                    {(
                                                        item?.tour?.price * 0.9
                                                    ).toLocaleString("vi-VN")}
                                                    đ
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="text-sm">
                                                    Vé trẻ em
                                                </div>
                                                <div className="text-sm">
                                                    {item?.infantQuantity} x{" "}
                                                    {(
                                                        item?.tour?.price * 0.5
                                                    ).toLocaleString("vi-VN")}
                                                    đ
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex items-center justify-between">
                                <div className="font-medium text-[20px]">
                                    <p>Tổng: </p>
                                </div>
                                <div className="text-lg font-bold">
                                    {order.totalAmount.toLocaleString("vi-VN")}đ
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Orders;

export const dynamic = "force-dynamic";

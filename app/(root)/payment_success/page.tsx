import Link from "next/link";
import React from "react";

const PaymentSuccess = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-5">
            <p className="text-[30px] font-semibold">Thanh toán thành công</p>
            <p className="text-gray-500 text-[20px]">Cảm ơn bạn đã đặt Tour</p>
            <Link
                href="/"
                className="p-4 rounded-[12px] font-medium bg-black text-white hover:bg-black/80"
            >
                Về trang chủ
            </Link>
        </div>
    );
};

export default PaymentSuccess;

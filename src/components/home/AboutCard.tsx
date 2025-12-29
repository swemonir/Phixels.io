"use client";

import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({
    value,
    label,
    prefix = "",
    suffix = "",
}: {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}) => {
    const count = useCountUp(value);

    return (
        <div className="flex flex-col items-center justify-center p-6 border border-gray-700 rounded-2xl bg-[#131120] text-center h-full w-full">
            <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {prefix}
                {count}
                {suffix}
            </p>
            <p className="text-xs sm:text-sm text-gray-400">{label}</p>
        </div>
    );
};

const AboutCard = () => {
    return (
        <div className="bg-black text-white px-4 sm:px-8 lg:px-20 xl:px-56 pb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StatItem value={9} suffix="+" label="Years of Experience" />
                <StatItem value={100} suffix="+" label="Projects Completed" />
                <StatItem value={1.5} suffix="k+" label="Client Trust" />
                <StatItem value={10} prefix="$" suffix="M+" label="Client Value" />
            </div>
        </div>
    );
};

export default AboutCard;

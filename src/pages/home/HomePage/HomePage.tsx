// react
import type { FC } from "react";
// components
import {Button} from "@/components/ui/button";


export const HomePage: FC = () => {
    
    return (
        <div>
            <p className="text-3xl font-bold text-red-500">Tailwind</p>
            <div className="mt-4 p-4 bg-blue-500 text-white rounded-lg">test tailwind</div>          
            <Button>Test shadch</Button>
        </div>
    );
};
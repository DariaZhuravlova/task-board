// react
import type { FC } from "react";
// components
import {Button} from "@/components/ui/button";
// styles
import styles from "./HomePage.module.scss";

export const HomePage: FC = () => {
    
    return (
        <div className={styles.HomePage}>
            <p className="text-3xl font-bold text-red-500">Tailwind</p>
            <div className="mt-4 p-4 bg-blue-500 text-white rounded-lg">test tailwind</div>          
            <Button>Test shadch</Button>
        </div>
    );
};
import s from "../css/logo.module.css"
import { Roboto } from "@next/font/google"
import { Inter } from "@next/font/google";

const Font = Inter({
    weight: "600",
    subsets: ["latin"]
})

export default function Logo() {
    return (
        <>
            <div className={s.logo}>
                <p style={{fontSize: 20}} className={Font.className}>Thundis</p>
            </div>
        </>
    )
}
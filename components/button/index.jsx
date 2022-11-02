import Link from 'next/link'

const Button = ({title, bgColor, shadow, textColor, link, width}) => {
    return (
        <>
            <Link href={link}>
                <button className={`${width ? 'w-full' : ''} px-6 py-2 ${bgColor} ${textColor} font-semibold shadow-lg ${shadow} hover:shadow-none transition-all duration-300 ease-linear`}>{title}</button>
            </Link>
        </>
    )
}

export default Button;
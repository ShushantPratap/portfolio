
function Card({
    className,
    imageSrc,
    imageClass,
    title,
    titleClass,
    paragraph,
    paragraphClass,
    children,
    ...prop
}) {
    return (
        <div className={`bg-[#e8e7e7] dark:bg-[#1c1c1c] dark:text-gray-100 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden ${className}`} {...prop}>
            {imageSrc &&
            <div className={imageClass}>
                <img src={imageSrc} alt={title} className="w-full h-full" />
            </div>
            }
            {title &&
            <h3 className={`text-3xl font-semibold ${titleClass}`}>{title}</h3>
            }
            {paragraph &&
            <p className={`leading-relaxed ${paragraphClass}`}>
                {paragraph}
            </p>
            }
            {children && <div>{children}</div>}
        </div>
    );
}

export default Card;
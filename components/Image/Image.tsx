import cn from "./../../utils/classNames";
import Image, {ImageLoaderProps, ImageProps} from "next/image";
import s from './Image.module.css';

const myLoader = ({src, width, quality}: ImageLoaderProps) => {
    return `https:${src}?w=${width}&q=${quality || 75}`;
};

const myNotCustomLoader = ({src, width, quality}: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

type Props = ImageProps & {
    className?: string;
    customLoader?: boolean;
    simpleClass?: boolean;
    objectFit?: string;
    objectPosition?: string;
    layout?: string;
};

const MyImage = ({
                     className,
                     src,
                     width,
                     height,
                     alt,
                     objectFit,
                     objectPosition,
                     layout = "intrinsic",
                     unoptimized = false,
                     priority = false,
                     sizes,
                     placeholder = "empty",
                     blurDataURL = "",
                     customLoader = false,
                     quality,
                     onClick,
                     simpleClass = false,
                     ...all
                 }: Props) => {
    return (
        <>
            {className && !simpleClass ? (
                <div className={'h-full'}>
                    <div className={cn(s.overlayDiv, className)} onClick={onClick}
                    />
                    <div className={className}>
                        <Image
                            src={src}
                            loader={customLoader ? myLoader : myNotCustomLoader}
                            width={width}
                            height={height}
                            blurDataURL={blurDataURL}
                            placeholder={placeholder}
                            alt={alt}
                            onClick={onClick}
                            quality={quality}
                            {...all}
                            priority={priority}
                            sizes={sizes}
                        />
                    </div>
                </div>
            ) : (
                <div className={'h-full'}>
                    <div className={s.overlayDiv} onClick={onClick}
                    />
                    <Image
                        src={src}
                        width={width}
                        height={height}
                        loader={customLoader ? myLoader : myNotCustomLoader}
                        onClick={onClick}
                        alt={alt}
                        quality={quality}
                        priority={priority}
                        placeholder={placeholder}
                        blurDataURL={blurDataURL}
                    />
                </div>
            )}
        </>
    );
};
export default MyImage;

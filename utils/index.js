export const checkImageURL = (url) => {
    if(!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', '1');
        return pattern.test(url);
    }
};
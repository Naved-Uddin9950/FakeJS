const setStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Storage Error :', error.message);
        return error.message;
    }
}

const getStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    } catch (error) {
        console.error('Storage Error :', error.message);
        return error.message;
    }
}

const removeStorage = (key) => {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Storage Error :', error.message);
        return error.message;
    }
}

const clearStorage = () => {
    try {
        localStorage.clear();
        return true;
    } catch (error) {
        console.error('Storage Error :', error.message);
        return error.message;
    }
}

export const useStorage = () => {
    return [setStorage, getStorage, removeStorage, clearStorage];
}
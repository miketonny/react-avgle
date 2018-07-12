import axios from 'axios';
/**
 * handles data transport layer functions,
 *  * communicates with node apis in backend ==============================================
 */

export async function fetchCategories() {
    try {
        return await axios('/api/categories');
    } catch (err) {
        return [];
    }
}

export async function fetchCategoryVideoList(id) {
    try {
        return await axios(`/api/videos/${id}`);
    } catch (err) {
        return [];
    }
}

export async function getVideoByID(id) {
    try {
        return await axios(`/api/video/${id}`);
    } catch (err) {
        return {};
    }
}

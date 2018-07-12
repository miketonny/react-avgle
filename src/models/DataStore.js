
import { observable, action } from 'mobx';
import { fetchCategories, fetchCategoryVideoList, getVideoByID } from './Transport';

export default class DataStore {
    /**
     Data store variables ==========
     */
    @observable categories = [];

    @observable categoryVideos = [];

    @observable currentVideo = {} ;

    constructor(rootStore) {
        this.root = rootStore;
    }

    @action
    async initData() {
        const results = await fetchCategories();
        this.categories.replace(results.data);
    }

    @action
    async fetchCategoryVids(catID) {
        const results = await fetchCategoryVideoList(catID);
        console.log(results.data);
        this.categoryVideos.replace(results.data);
    }

    @action
    async fetchVideo(vid) {
        const video = await getVideoByID(vid);
        this.currentVideo = video;
    }
}

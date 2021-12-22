import axios from 'axios';
export const uploadImages = (data) => {
    const fd = new FormData();
    fd.append('file', data.file);
    return axios.post('http://upload.xuruidea.com/upload/', fd).then(res => res.data)
}
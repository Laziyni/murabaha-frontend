import axios from 'axios';
import { DealDraft } from '@/types/contract';
import { API_BASE_URL } from 'src/config';


const api = axios.create({ baseURL: API_BASE_URL, withCredentials: true, timeout: 15000 });


// Примеры методов — адаптируйте под ваш бэк
export const Api = {
async fetchClients() {
const { data } = await api.get('/clients');
return data;
},
async saveDealDraft(draft: DealDraft) {
const { data } = await api.post('/deals', draft);
return data;
},
async fetchDeals() {
const { data } = await api.get('/deals');
return data;
}
};


export default Api;